import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import { Product } from '../models/ProductSchema';

const router = express.Router();

interface IFindProductQuery {
  categories?: string;
  isDeleted: boolean;
}

router.get('/', async (req, res) => {
  try {
    let query: IFindProductQuery = { isDeleted: false };
    const categories = req.query.category as string;
    const sort = req.query.sort as string;

    const offset = req.query.offset ? req.query.offset : 0;
    const limit = req.query.limit ? req.query.limit : 0;
    categories && (query = { ...query, categories });

    const products = await Product.find(query).limit(Number(limit)).skip(Number(offset)).sort(sort);
    const totalProducts = await Product.countDocuments(query);

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Products retrieved successfully.',
      data: { total: totalProducts, products },
    });
  } catch (error: any) {
    console.log('GetProducts Error: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.post('/add', async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  let imageUrl: string = '';

  try {
    await cloudinary.uploader.upload(req.body.image, { public_id: req.body.title }, function (error, result) {
      result ? (imageUrl = result?.secure_url) : '';
    });

    const newProduct = await Product.create({
      title: req.body.title,
      description: req.body.description,
      categories: req.body.categories,
      priceMultiplier: req.body.priceMultiplier,
      imageUrl: imageUrl,
    });

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Product created successfully.',
      product: newProduct,
    });
  } catch (error: any) {
    console.log('AddProduct Error: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.put('/edit', async (req, res) => {});

router.put('/delete', async (req, res) => {
  const productId = req.body.productId;

  try {
    const product = await Product.findOne({ _id: productId });

    if (!product) {
      throw new Error('Product not found.');
    }

    product.isDeleted = true;
    await product.save();

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Product deleted successfully.',
    });
  } catch (error: any) {
    console.log('DeleteProduct Error: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

router.get('/:productId', async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);

    if (!product) {
      throw new Error('Product not found.');
    }

    res.status(200).json({
      status: 200,
      success: true,
      message: 'Product retrieved successfully.',
      data: product,
    });
  } catch (error: any) {
    console.log('GetProduct Error: ', error);

    res.status(400).json({
      status: 400,
      message: error.message.toString(),
    });
  }
});

export default router;

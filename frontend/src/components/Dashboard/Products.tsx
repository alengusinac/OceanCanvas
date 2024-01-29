import Paper from '@mui/material/Paper';
import MaterialIconButton from '../MaterialIconButton';
import { MdAddCircleOutline } from 'react-icons/md';
import { FlexWrapper } from '../styled/Flex.styled';
import { useEffect, useState } from 'react';
import {
  BodyText,
  Heading2,
  Heading4,
  SmallBodyText,
} from '../styled/Text.styled';
import { getProducts } from '@/services/productService';
import { ICategory, IProduct, ISize } from '@/models/IProduct';
import PrintProducts from './PrintProducts';
import AddProductForm from './AddProductForm';
import AddSizeForm from './AddSizeForm';
import { getSizes } from '@/services/sizesService';
import { getCategories } from '@/services/categoryService';
import AddCategoryForm from './AddCategoryForm';

const Products = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openAddCategory, setOpenAddCategory] = useState(false);
  const [openAddSize, setOpenAddSize] = useState(false);
  const [sizes, setSizes] = useState<ISize[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    getProductsAsync();
    getSizesAsync();
    getCategoriesAsync();
  }, []);

  const getProductsAsync = async () => {
    try {
      const products = await getProducts();
      setProducts(products as IProduct[]);
    } catch (error) {
      console.log(error);
      setProducts([]);
    }
  };

  const getSizesAsync = async () => {
    try {
      const sizes = await getSizes();
      setSizes(sizes as ISize[]);
    } catch (error) {
      console.log(error);
      setSizes([]);
    }
  };

  const getCategoriesAsync = async () => {
    try {
      const categories = await getCategories();
      setCategories(categories as ICategory[]);
    } catch (error) {
      console.log(error);
      setCategories([]);
    }
  };

  return (
    <>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', mb: 2 }}>
        <FlexWrapper style={{ justifyContent: 'space-between' }}>
          <Heading2>Products</Heading2>
          <MaterialIconButton
            onClick={() => setOpenAddProduct(!openAddProduct)}
            icon={<MdAddCircleOutline />}
          />
        </FlexWrapper>

        {openAddProduct && (
          <AddProductForm
            getProductsAsync={getProductsAsync}
            categories={categories}
          />
        )}

        <SmallBodyText>{products.length} products</SmallBodyText>
        <PrintProducts
          products={products}
          getProductsAsync={getProductsAsync}
        />
      </Paper>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          mb: 2,
        }}
      >
        <FlexWrapper style={{ justifyContent: 'space-between' }}>
          <Heading2>Sizes</Heading2>
          <MaterialIconButton
            onClick={() => setOpenAddSize(!openAddSize)}
            icon={<MdAddCircleOutline />}
          />
        </FlexWrapper>

        {openAddSize && <AddSizeForm getSizesAsync={getSizesAsync} />}

        <SmallBodyText>{sizes.length} sizes</SmallBodyText>

        <FlexWrapper
          style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
        >
          {sizes.map((size) => (
            <div key={size._id}>
              <Heading4>
                {size.width} x {size.height}
              </Heading4>
              <BodyText>$ {size.price}</BodyText>
            </div>
          ))}
        </FlexWrapper>
      </Paper>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          mb: 2,
        }}
      >
        <FlexWrapper style={{ justifyContent: 'space-between' }}>
          <Heading2>Categories</Heading2>
          <MaterialIconButton
            onClick={() => setOpenAddCategory(!openAddCategory)}
            icon={<MdAddCircleOutline />}
          />
        </FlexWrapper>

        {openAddCategory && (
          <AddCategoryForm getCategoriesAsync={getCategoriesAsync} />
        )}

        <SmallBodyText>{categories.length} categories</SmallBodyText>

        <FlexWrapper
          style={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
        >
          {categories.map((category) => (
            <div key={category._id}>
              <Heading4>{category.category}</Heading4>
            </div>
          ))}
        </FlexWrapper>
      </Paper>
    </>
  );
};

export default Products;

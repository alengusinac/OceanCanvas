import express from 'express';
import { v2 as cloudinary } from 'cloudinary';

const router = express.Router();

router.post('/add', async (req, res) => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    cloudinary.uploader.upload(req.body.image, { public_id: req.body.title }, function (error, result) {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
});

router.put('/edit', async (req, res) => {});

router.put('/delete', async (req, res) => {});

export default router;

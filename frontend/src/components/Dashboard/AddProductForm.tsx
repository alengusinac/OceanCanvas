import { Button, TextField } from '@mui/material';
import { CheckoutForm } from '../styled/Checkout.styled';
import { Heading4 } from '../styled/Text.styled';
import { useState } from 'react';
import { addProduct } from '@/services/productService';
import FileResizer from 'react-image-file-resizer';

interface Props {
  getProductsAsync: () => void;
}

const AddProductForm = ({ getProductsAsync }: Props) => {
  const [imageUrl, setImageUrl] = useState('');
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    priceMultiplier: 0,
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendNewProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = {
      ...formValues,
      imageUrl,
      categories: ['fish'],
    };

    try {
      await addProduct(values);
      getProductsAsync();
    } catch (error) {
      console.log(error);
    }
  };

  const convertImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImage = await new Promise((resolve) => {
        FileResizer.imageFileResizer(
          file,
          1920,
          1080,
          'WEBP',
          80,
          0,
          (uri) => {
            resolve(uri);
          },
          'WEBP'
        );
      });
      setImageUrl(newImage as string);
    }
  };

  return (
    <div>
      <Heading4>Add Product</Heading4>
      <CheckoutForm onSubmit={sendNewProduct}>
        <TextField
          name="title"
          value={formValues.title}
          onChange={onFormChange}
          label="Title"
        />
        <TextField
          name="description"
          value={formValues.description}
          onChange={onFormChange}
          label="Description"
          multiline
          rows={4}
        />
        <TextField
          name="priceMultiplier"
          type="number"
          value={formValues.priceMultiplier}
          onChange={onFormChange}
          label="Price multiplier"
        />
        <TextField onChange={convertImage} id="imageFile" type="file" />
        <img src={imageUrl} alt="" width={150} />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </CheckoutForm>
    </div>
  );
};

export default AddProductForm;

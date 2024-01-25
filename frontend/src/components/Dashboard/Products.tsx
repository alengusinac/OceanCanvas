import Paper from '@mui/material/Paper';
import MaterialIconButton from '../MaterialIconButton';
import { MdAddCircleOutline } from 'react-icons/md';
import { FlexWrapper } from '../styled/Flex.styled';
import { useState } from 'react';
import { Heading4 } from '../styled/Text.styled';
import { Button, TextField } from '@mui/material';
import FileResizer from 'react-image-file-resizer';
import { CheckoutForm } from '../styled/Checkout.styled';
import { addProduct } from '@/services/productService';

const Products = () => {
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [image, setImage] = useState('');
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

  const convertImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImage = await resizeFile(file);
      setImage(newImage as string);
    }
  };

  const sendNewProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = {
      ...formValues,
      image,
      categories: ['fish'],
    };

    try {
      const response = await addProduct(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const resizeFile = async (file: File) =>
    new Promise((resolve) => {
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

  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
      <FlexWrapper>
        <h2>Products</h2>
        <MaterialIconButton
          onClick={() => setOpenAddProduct(!openAddProduct)}
          icon={<MdAddCircleOutline />}
        />
      </FlexWrapper>
      {openAddProduct && (
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
            <img src={image} alt="" width={150} />
            <Button type="submit" variant="contained">
              Add
            </Button>
          </CheckoutForm>
        </div>
      )}
    </Paper>
  );
};

export default Products;

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { StyledForm } from '../styled/Form.styled';
import { Heading4 } from '../styled/Text.styled';
import { useState } from 'react';
import { addProduct } from '@/services/productService';
import FileResizer from 'react-image-file-resizer';
import { ICategory } from '@/models/IProduct';

interface Props {
  getProductsAsync: () => void;
  categories: ICategory[];
}

const AddProductForm = ({ getProductsAsync, categories }: Props) => {
  const [image, setImage] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    priceMultiplier: 1,
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    if (selectedCategories.includes(value)) {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    } else {
      setSelectedCategories([...selectedCategories, value]);
    }
  };

  const sendNewProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const values = {
      ...formValues,
      image,
      categories: selectedCategories,
    };

    try {
      await addProduct(values);
      getProductsAsync();
      setFormValues({
        title: '',
        description: '',
        priceMultiplier: 1,
      });
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
      setImage(newImage as string);
    }
  };

  return (
    <div>
      <Heading4>Add Product</Heading4>
      <StyledForm onSubmit={sendNewProduct}>
        <TextField
          name="title"
          value={formValues.title}
          onChange={onFormChange}
          label="Title"
          variant="filled"
        />
        <TextField
          name="description"
          value={formValues.description}
          onChange={onFormChange}
          label="Description"
          multiline
          rows={4}
          variant="filled"
        />

        {categories.map((category) => (
          <div key={category._id}>
            <label>
              <input
                type="checkbox"
                name="categories"
                value={category.category.toLowerCase()}
                onChange={onCategoryChange}
              />
              {category.category}
            </label>
          </div>
        ))}

        <TextField
          name="priceMultiplier"
          type="number"
          value={formValues.priceMultiplier}
          onChange={onFormChange}
          label="Price multiplier"
          variant="filled"
        />
        <TextField onChange={convertImage} id="imageFile" type="file" />
        <img src={image} alt="" width={150} />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </StyledForm>
    </div>
  );
};

export default AddProductForm;

import { Button, TextField } from '@mui/material';
import { Heading4 } from '../styled/Text.styled';
import { useState } from 'react';
import { CheckoutForm } from '../styled/Checkout.styled';
import { addCategory } from '@/services/categoryService';

interface Props {
  getCategoriesAsync: () => Promise<void>;
}

const AddCategoryForm = ({ getCategoriesAsync }: Props) => {
  const [formValues, setFormValues] = useState({
    category: '',
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addCategoryAsync = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await addCategory(formValues);
      console.log(response);
      getCategoriesAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Heading4>Add Category</Heading4>
      <CheckoutForm onSubmit={addCategoryAsync}>
        <TextField
          name="category"
          value={formValues.category}
          onChange={onFormChange}
          label="Category"
        />

        <Button type="submit" variant="contained">
          Add
        </Button>
      </CheckoutForm>
    </>
  );
};

export default AddCategoryForm;

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Heading4 } from '../styled/Text.styled';
import { useState } from 'react';
import { StyledForm } from '../styled/Form.styled';
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
      await addCategory(formValues);
      getCategoriesAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Heading4>Add Category</Heading4>
      <StyledForm onSubmit={addCategoryAsync}>
        <TextField
          name="category"
          value={formValues.category}
          onChange={onFormChange}
          label="Category"
        />

        <Button type="submit" variant="contained">
          Add
        </Button>
      </StyledForm>
    </>
  );
};

export default AddCategoryForm;

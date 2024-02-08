import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Heading4 } from '../styled/Text.styled';
import { useState } from 'react';
import { StyledForm } from '../styled/Form.styled';
import { addSize } from '@/services/sizesService';

interface Props {
  getSizesAsync: () => Promise<void>;
}

const AddSizeForm = ({ getSizesAsync }: Props) => {
  const [formValues, setFormValues] = useState({
    width: 0,
    height: 0,
    price: 0,
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addSizeAsync = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addSize(formValues);
      getSizesAsync();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Heading4>Add Size</Heading4>
      <StyledForm onSubmit={addSizeAsync}>
        <TextField
          name="width"
          value={formValues.width}
          onChange={onFormChange}
          label="Width"
        />
        <TextField
          name="height"
          value={formValues.height}
          onChange={onFormChange}
          label="Height"
        />
        <TextField
          name="price"
          type="number"
          value={formValues.price}
          onChange={onFormChange}
          label="Price"
        />
        <Button type="submit" variant="contained">
          Add
        </Button>
      </StyledForm>
    </>
  );
};

export default AddSizeForm;

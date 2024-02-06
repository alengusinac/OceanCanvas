import { Button, TextField } from '@mui/material';
import { LoginSignupContainer } from '../components/styled/LoginSignup';
import { ErrorText, Heading2 } from '../components/styled/Text.styled';
import { ChangeEvent, useState } from 'react';
import { IFormField } from '@/models/IFormField';
import { StyledForm } from '@/components/styled/Form.styled';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '@/services/userService';

interface FormValues {
  email: IFormField;
  password: IFormField;
}

const Signup = () => {
  const [formValues, setFormValues] = useState({
    firstname: {
      value: '',
      error: false,
      errorMessage: 'You must enter a firstname',
    },
    lastname: {
      value: '',
      error: false,
      errorMessage: 'You must enter a lastname',
    },
    email: {
      value: '',
      error: false,
      errorMessage: 'You must enter an email',
    },
    password: {
      value: '',
      error: false,
      errorMessage: 'You must enter a password',
    },
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onFormChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues({
      ...formValues,
      [name]: {
        ...formValues[name as keyof FormValues],
        value,
      },
    });
  };

  const validateForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };
    let noErrorFound = true;
    setError('');

    for (let i = 0; i < formFields.length; i++) {
      const currentField = formFields[i];
      const currentValue = formValues[currentField as keyof FormValues].value;

      if (currentValue === '') {
        noErrorFound = false;
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField as keyof FormValues],
            error: true,
          },
        };
      } else {
        newFormValues = {
          ...newFormValues,
          [currentField]: {
            ...newFormValues[currentField as keyof FormValues],
            error: false,
          },
        };
      }
    }
    if (noErrorFound) {
      sendForm();
    }
    setFormValues(newFormValues);
  };

  const sendForm = async () => {
    try {
      const values = {
        email: formValues.email.value,
        password: formValues.password.value,
        name: `${formValues.firstname.value} ${formValues.lastname.value}`,
      };
      const response = await registerUser(values);
      if (response.status === 200) {
        navigate('/login');
      } else {
        setError(response.data.message);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      if (error.data.message) {
        setError(error.data.message);
      }
    }
  };

  return (
    <LoginSignupContainer>
      <Heading2>Sign Up</Heading2>
      {error && <ErrorText data-testid="cy-errorMsg">{error}</ErrorText>}
      <StyledForm onSubmit={validateForm}>
        <TextField
          value={formValues.firstname.value}
          name="firstname"
          onChange={onFormChange}
          error={formValues.firstname.error}
          helperText={
            formValues.firstname.error && formValues.firstname.errorMessage
          }
          label="Firstname"
          variant="filled"
          required
        />
        <TextField
          value={formValues.lastname.value}
          name="lastname"
          onChange={onFormChange}
          error={formValues.lastname.error}
          helperText={
            formValues.lastname.error && formValues.lastname.errorMessage
          }
          label="Lastname"
          variant="filled"
          required
        />
        <TextField
          value={formValues.email.value}
          name="email"
          onChange={onFormChange}
          error={formValues.email.error}
          helperText={formValues.email.error && formValues.email.errorMessage}
          label="E-mail"
          variant="filled"
          required
        />
        <TextField
          value={formValues.password.value}
          name="password"
          onChange={onFormChange}
          error={formValues.password.error}
          helperText={
            formValues.password.error && formValues.password.errorMessage
          }
          type="password"
          label="Password"
          variant="filled"
          required
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </StyledForm>
    </LoginSignupContainer>
  );
};

export default Signup;

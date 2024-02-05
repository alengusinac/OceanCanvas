import { Button, TextField } from '@mui/material';
import { LoginSignupContainer } from '../components/styled/LoginSignup';
import { Heading2, SmallBodyText } from '../components/styled/Text.styled';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '@/hooks/useUserContext';
import { IFormField } from '@/models/IFormField';
import { StyledForm } from '@/components/styled/Form.styled';

interface FormValues {
  email: IFormField;
  password: IFormField;
}

const Login = () => {
  const [formValues, setFormValues] = useState({
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
  const { login } = useUserContext();
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

  const validateForm = () => {
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
      };
      login(values);
      navigate(-1);
    } catch (error) {
      console.log(error);
      setError('Something went wrong, please try again later');
    }
  };

  return (
    <LoginSignupContainer>
      <Heading2>Login</Heading2>
      {error && <SmallBodyText>{error}</SmallBodyText>}
      <StyledForm>
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
        <Button onClick={validateForm} variant="contained">
          Login
        </Button>
      </StyledForm>
    </LoginSignupContainer>
  );
};

export default Login;

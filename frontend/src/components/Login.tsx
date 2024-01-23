import { Button, TextField } from '@mui/material';
import { LoginSignupContainer } from './styled/LoginSignup';
import { Heading2 } from './styled/Text.styled';
import { ChangeEvent, useState } from 'react';
import { post } from '@/services/baseService';
import { IUserResponse } from '@/models/IUserResponse';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

interface FormField {
  value: string;
  error: boolean;
  errorMessage: string;
}

interface FormValues {
  email: FormField;
  password: FormField;
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

  const validate = () => {
    const formFields = Object.keys(formValues);
    let newFormValues = { ...formValues };
    let noErrorFound = true;

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
      }
    }

    if (noErrorFound) login();
    setFormValues(newFormValues);
  };

  const login = async () => {
    const values = {
      email: formValues.email.value,
      password: formValues.password.value,
    };
    const response = await post<IUserResponse>(
      'http://localhost:3000/users/login',
      values
    );

    if (response.status === 200) {
      Cookies.set('token', response.token, { expires: 1 });
      navigate(-1);
    }
  };

  return (
    <LoginSignupContainer>
      <Heading2>Login</Heading2>
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
      <Button onClick={validate} variant="contained">
        Login
      </Button>
    </LoginSignupContainer>
  );
};

export default Login;

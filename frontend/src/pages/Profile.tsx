import { StyledForm } from '@/components/styled/Form.styled';
import {
  BodyText,
  Heading1,
  Heading3,
  Heading4,
  SmallBodyText,
} from '@/components/styled/Text.styled';
import { useUserContext } from '@/hooks/useUserContext';
import { IFormField } from '@/models/IFormField';
import { changeUserPassword } from '@/services/userService';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PasswordFormValues {
  password1: IFormField;
  password2: IFormField;
}

const Profile = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  const [passwordMessage, setPasswordMessage] = useState('');
  const [addressFormValues, setAddressFormValues] = useState({
    email: '',
    firstname: '',
    lastname: '',
    address: '',
    zipcode: '',
    city: '',
    country: '',
    phonenumber: '',
  });
  const [passwordFormValues, setPasswordFormValues] = useState({
    password1: {
      value: '',
      error: false,
      errorMessage: 'You must enter an password',
    },
    password2: {
      value: '',
      error: false,
      errorMessage: 'You must enter a password',
    },
  });

  const onPasswordSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordFormValues.password1.value === '') {
      setPasswordFormValues({
        ...passwordFormValues,
        password1: { ...passwordFormValues.password1, error: true },
      });
      return;
    }
    if (passwordFormValues.password2.value === '') {
      setPasswordFormValues({
        ...passwordFormValues,
        password2: { ...passwordFormValues.password2, error: true },
      });
      return;
    }
    if (
      passwordFormValues.password1.value !== passwordFormValues.password2.value
    ) {
      setPasswordFormValues({
        ...passwordFormValues,
        password2: {
          ...passwordFormValues.password2,
          error: true,
          errorMessage: 'Passwords must match',
        },
      });
      return;
    } else {
      setPasswordFormValues({
        password1: { ...passwordFormValues.password1, error: false },
        password2: { ...passwordFormValues.password2, error: false },
      });

      try {
        await changeUserPassword(passwordFormValues.password1.value);
        setPasswordMessage('Password changed successfully.');
      } catch (error) {
        setPasswordMessage('Something went wrong, try again later.');
      }
    }
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setPasswordFormValues({
      ...passwordFormValues,
      [name]: {
        ...passwordFormValues[name as keyof PasswordFormValues],
        value,
      },
    });
  };

  const onAddressSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Address submit');
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setAddressFormValues({
      ...addressFormValues,
      [name]: value,
    });
  };

  return (
    <div>
      <Heading1>Profile</Heading1>
      <BodyText>{user?.name}</BodyText>
      <SmallBodyText>{user?.email}</SmallBodyText>
      <Button
        variant="contained"
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        Logout
      </Button>
      {user?.admin && (
        <Button
          variant="contained"
          onClick={() => {
            navigate('/admin');
          }}
        >
          Admin Dashboard
        </Button>
      )}
      <div>
        <Heading3>Orders</Heading3>
        <BodyText>Order 1</BodyText>
        <BodyText>Order 2</BodyText>
        <BodyText>Order 3</BodyText>
      </div>
      <div>
        <Heading3>Settings</Heading3>
        <Heading4>Change Address</Heading4>
        <StyledForm onSubmit={onAddressSubmit}>
          <TextField
            value={addressFormValues.email}
            onChange={onChangeAddress}
            name="email"
            label="E-mail"
            variant="filled"
          />
          <TextField
            value={addressFormValues.firstname}
            onChange={onChangeAddress}
            name="firstname"
            label="Firstname"
            variant="filled"
          />
          <TextField
            value={addressFormValues.lastname}
            onChange={onChangeAddress}
            name="lastname"
            label="Lastname"
            variant="filled"
          />
          <TextField
            value={addressFormValues.address}
            onChange={onChangeAddress}
            name="address"
            label="Address"
            variant="filled"
          />
          <TextField
            value={addressFormValues.zipcode}
            onChange={onChangeAddress}
            name="zipcode"
            label="Zipcode"
            variant="filled"
          />
          <TextField
            value={addressFormValues.city}
            onChange={onChangeAddress}
            name="city"
            label="City"
            variant="filled"
          />
          <TextField
            value={addressFormValues.country}
            onChange={onChangeAddress}
            name="country"
            label="Country"
            variant="filled"
          />
          <TextField
            value={addressFormValues.phonenumber}
            onChange={onChangeAddress}
            name="phonenumber"
            label="Phone number"
            variant="filled"
          />
          <Button type="submit" variant="contained">
            Save Address
          </Button>
        </StyledForm>
        <Heading4>Change Password</Heading4>
        <SmallBodyText>{passwordMessage}</SmallBodyText>
        <StyledForm onSubmit={onPasswordSubmit}>
          <TextField
            value={passwordFormValues.password1.value}
            onChange={onChangePassword}
            type="password"
            name="password1"
            error={passwordFormValues.password1.error}
            helperText={
              passwordFormValues.password1.error &&
              passwordFormValues.password1.errorMessage
            }
            label="New password"
            variant="filled"
          />
          <TextField
            value={passwordFormValues.password2.value}
            onChange={onChangePassword}
            type="password"
            name="password2"
            error={passwordFormValues.password2.error}
            helperText={
              passwordFormValues.password2.error &&
              passwordFormValues.password2.errorMessage
            }
            label="Confirm New password"
            variant="filled"
          />
          <Button type="submit" variant="contained">
            Save Password
          </Button>
        </StyledForm>
      </div>
    </div>
  );
};

export default Profile;

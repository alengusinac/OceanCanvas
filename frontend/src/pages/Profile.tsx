import OrderHistory from '@/components/OrderHistory';
import { StyledForm } from '@/components/styled/Form.styled';
import { StyledProfile } from '@/components/styled/Profile.styled';
import {
  BodyText,
  ErrorText,
  Heading1,
  Heading3,
  Heading4,
  SmallBodyText,
} from '@/components/styled/Text.styled';
import { useUserContext } from '@/hooks/useUserContext';
import { IFormField } from '@/models/IFormField';
import { IOrder } from '@/models/IOrder';
import { getUserOrders } from '@/services/orderService';
import { changeUserAddress, changeUserPassword } from '@/services/userService';
import { Button, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface PasswordFormValues {
  password1: IFormField;
  password2: IFormField;
}

const Profile = () => {
  const { user, logout } = useUserContext();
  const navigate = useNavigate();
  const [orders, setOrders] = useState<IOrder[]>([]);
  const [addressMessage, setAddressMessage] = useState('');
  const [addressErrorMessage, setAddressErrorMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [addressFormValues, setAddressFormValues] = useState({
    firstname: user?.address.firstname || '',
    lastname: user?.address.lastname || '',
    address: user?.address.address || '',
    zipcode: user?.address.zipcode || '',
    city: user?.address.city || '',
    country: user?.address.country || '',
    phone: user?.address.phone || '',
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

  useEffect(() => {
    setAddressFormValues({
      firstname: user?.address.firstname || '',
      lastname: user?.address.lastname || '',
      address: user?.address.address || '',
      zipcode: user?.address.zipcode || '',
      city: user?.address.city || '',
      country: user?.address.country || '',
      phone: user?.address.phone || '',
    });
    getUserOrdersAsync();
  }, [user]);

  const getUserOrdersAsync = async () => {
    try {
      const response = await getUserOrders();
      if (response) {
        if (response.status === 200) {
          setOrders(response.data);
        } else {
          setOrders([]);
        }
      }
    } catch (error) {
      console.log('Error', error);
    }
  };

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
        const response = await changeUserPassword(
          passwordFormValues.password1.value
        );
        if (response.status === 200) {
          setPasswordMessage(response.message);
        } else {
          setPasswordErrorMessage(response.message);
        }
      } catch (error: any) {
        setPasswordErrorMessage(error.message);
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

  const onAddressSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await changeUserAddress(addressFormValues);
      if (response.status === 200) {
        setAddressMessage(response.message);
      } else {
        setAddressErrorMessage(response.message);
      }
    } catch (error: any) {
      console.log('Error', error);
      setAddressErrorMessage(error.message);
    }
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setAddressFormValues({
      ...addressFormValues,
      [name]: value,
    });
  };

  return (
    <StyledProfile>
      <Heading1>Profile</Heading1>
      <BodyText>{user?.name}</BodyText>
      <SmallBodyText>{user?.email}</SmallBodyText>
      <Button
        variant="contained"
        name="logout"
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
      <OrderHistory orders={orders} />
      <div>
        <Heading3>Settings</Heading3>
        <Heading4>Change Address</Heading4>
        {addressMessage && <SmallBodyText>{addressMessage}</SmallBodyText>}
        {addressErrorMessage && <ErrorText>{addressErrorMessage}</ErrorText>}
        <StyledForm onSubmit={onAddressSubmit}>
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
            value={addressFormValues.phone}
            onChange={onChangeAddress}
            name="phone"
            label="Phone number"
            variant="filled"
          />
          <Button type="submit" variant="contained">
            Save Address
          </Button>
        </StyledForm>
        <Heading4>Change Password</Heading4>
        {passwordMessage && <SmallBodyText>{passwordMessage}</SmallBodyText>}
        {passwordErrorMessage && <ErrorText>{passwordErrorMessage}</ErrorText>}
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
    </StyledProfile>
  );
};

export default Profile;

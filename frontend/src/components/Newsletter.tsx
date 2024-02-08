import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NewsLetterWrapper } from './styled/Footer.styled';
import { memo, useState } from 'react';
import { subscribeNewsletter } from '@/services/newsletterService';
import { ErrorText, SmallBodyText } from './styled/Text.styled';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await subscribeNewsletter(email);
      console.log(response);
      if (response.status === 200) {
        setSuccess(response.message);
      } else {
        setError('Email already registered to the newsletter.');
      }
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <NewsLetterWrapper onSubmit={submitForm}>
      <p>Subscribe to our newsletter:</p>
      {error && <ErrorText>{error}</ErrorText>}
      {success && <SmallBodyText>{success}</SmallBodyText>}
      <TextField
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="E-mail"
        variant="standard"
      />
      <Button type="submit" variant="outlined">
        Subscribe
      </Button>
    </NewsLetterWrapper>
  );
};

export default memo(Newsletter);

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NewsLetterWrapper } from './styled/Footer.styled';

const Newsletter = () => {
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <NewsLetterWrapper onSubmit={submitForm}>
      <p>Subscribe to our newsletter:</p>

      <TextField type="email" label="E-mail" variant="standard" />
      <Button type="submit" variant="outlined">
        Subscribe
      </Button>
    </NewsLetterWrapper>
  );
};

export default Newsletter;

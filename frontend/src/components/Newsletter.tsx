import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { NewsLetterWrapper } from './styled/Footer.styled';

const Newsletter = () => {
  return (
    <NewsLetterWrapper>
      <p>Subscribe to our newsletter</p>
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Button variant="outlined">Outlined</Button>
    </NewsLetterWrapper>
  );
};

export default Newsletter;

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { HeroWrapper, Image } from './styled/HeroBanner.styled';
import { memo } from 'react';

interface Props {
  image: string;
  buttonText: string;
  onClick: React.MouseEventHandler;
  alt: string;
}

const HeroBanner = ({ image, buttonText, onClick, alt }: Props) => {
  return (
    <HeroWrapper>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ position: 'absolute', width: '100%', height: '100%' }}
      >
        <Button variant="contained" onClick={onClick} sx={{ height: 40 }}>
          {buttonText}
        </Button>
      </Box>
      <Image alt={alt} src={image} />
    </HeroWrapper>
  );
};

export default memo(HeroBanner);

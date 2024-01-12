import styled from 'styled-components';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

interface Props {
  image: string;
  buttonText: string;
  onClick: React.MouseEventHandler;
}

const HeroWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroBanner = ({ image, buttonText, onClick }: Props) => {
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
      <Image src={image} />
    </HeroWrapper>
  );
};

export default HeroBanner;

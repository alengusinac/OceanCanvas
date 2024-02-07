import HeroBanner from '@/components/HeroBanner';
import { useNavigate } from 'react-router-dom';
import { BodyText, Heading1 } from '@/components/styled/Text.styled';
import { StyledHome } from '@/components/styled/Home.styled';

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledHome>
      <Heading1>
        Welcome to
        <br /> OceanCanvas
      </Heading1>
      <BodyText>
        ...where the enchanting world beneath the waves comes to life through
        the lens of our talented photographers, notably Alen Gusinac. Immerse
        yourself in the mesmerizing beauty of underwater art, meticulously
        captured and thoughtfully presented for your exploration.
      </BodyText>
      <HeroBanner
        image={
          'https://res.cloudinary.com/dkoejzei7/image/upload/f_auto,q_auto/Whaleshark'
        }
        buttonText="Explore All Prints"
        onClick={() => navigate('/products', { state: { category: '' } })}
      />
      <HeroBanner
        image={
          'https://res.cloudinary.com/dkoejzei7/image/upload/f_auto,q_auto/Fish%202'
        }
        buttonText="Explore Fish Prints"
        onClick={() => navigate('/products', { state: { category: 'fish' } })}
      />
      <HeroBanner
        image={
          'https://res.cloudinary.com/dkoejzei7/image/upload/f_auto,q_auto/mgipxlvzqk6st7p2lg6l'
        }
        buttonText="Explore Coral Prints"
        onClick={() => navigate('/products', { state: { category: 'corals' } })}
      />
    </StyledHome>
  );
};

export default Home;

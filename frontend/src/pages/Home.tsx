import HeroBanner from '@/components/HeroBanner';
import ocean1 from '@/assets/images/ocean1.jpg';
import ocean2 from '@/assets/images/ocean2.jpg';
import ocean3 from '@/assets/images/ocean3.jpg';
import { useNavigate } from 'react-router-dom';
import { BodyText, Heading1 } from '@/components/styled/Text.styled';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();

  const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
      p {
        max-width: 80%;
      }
    }

    @media (min-width: 900px) {
      flex-direction: row;
      flex-wrap: wrap;

      h1,
      p {
        width: 100%;
      }
    }

    @media (min-width: 1400px) {
      max-width: 1400px;
      margin: 0 auto;
    }
  `;

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
        image={ocean1}
        buttonText="Explore Prints"
        onClick={() => navigate('/products', { state: { key: 'all' } })}
      />
      <HeroBanner
        image={ocean2}
        buttonText="Explore Fish"
        onClick={() => navigate('/products', { state: { key: 'fish' } })}
      />
      <HeroBanner
        image={ocean3}
        buttonText="Explore Corals"
        onClick={() => navigate('/products', { state: { key: 'corals' } })}
      />
    </StyledHome>
  );
};

export default Home;

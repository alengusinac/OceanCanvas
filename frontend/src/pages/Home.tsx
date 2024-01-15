import HeroBanner from '@/components/HeroBanner';
import ocean1 from '@/assets/images/ocean1.jpg';
import ocean2 from '@/assets/images/ocean2.jpg';
import ocean3 from '@/assets/images/ocean3.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
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
    </>
  );
};

export default Home;

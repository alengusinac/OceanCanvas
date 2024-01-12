import HeroBanner from '@/components/HeroBanner';
import ocean1 from '@/assets/images/ocean1.jpg';
import ocean2 from '@/assets/images/ocean2.jpg';
import ocean3 from '@/assets/images/ocean3.jpg';

const handleClick = () => {
  console.log('CLICK');
};

const Home = () => {
  return (
    <>
      <HeroBanner
        image={ocean1}
        buttonText="Explore Prints"
        onClick={handleClick}
      />
      <HeroBanner
        image={ocean2}
        buttonText="Explore Fish"
        onClick={handleClick}
      />
      <HeroBanner
        image={ocean3}
        buttonText="Explore Corals"
        onClick={handleClick}
      />
    </>
  );
};

export default Home;

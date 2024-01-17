import photographer1 from '@/assets/images/oceanPhotographer.jpg';
import photographer2 from '@/assets/images/oceanPhotographer2.jpg';
import { StyledAbout } from '@/components/styled/About.styled';

const About = () => {
  return (
    <StyledAbout>
      <h1>About Us</h1>
      <p>
        Welcome to OceanCanvas, where the mesmerizing world beneath the waves
        comes to life through the lens of the exceptionally talented
        photographer, Alen Gusinac. Our journey began with Alen's profound
        appreciation for the beauty hidden beneath the ocean's surface, and a
        shared desire to bring that beauty to the world.
      </p>
      <img src={photographer1} alt="" />
      <img src={photographer2} alt="" />
    </StyledAbout>
  );
};

export default About;

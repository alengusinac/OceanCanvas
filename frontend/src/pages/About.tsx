import photographer1 from '@/assets/images/oceanPhotographer.jpg';
import photographer2 from '@/assets/images/oceanPhotographer2.jpg';
import { ImagesContainer } from '@/components/styled/About.styled';
import {
  BodyText,
  BoldBodyText,
  Header1,
  Header4,
} from '@/components/styled/Text.styled';

const About = () => {
  return (
    <>
      <Header1>About Us</Header1>
      <BodyText>
        Welcome to OceanCanvas, where the mesmerizing world beneath the waves
        comes to life through the lens of the exceptionally talented
        photographer, Alen Gusinac. Our journey began with Alen's profound
        appreciation for the beauty hidden beneath the ocean's surface, and a
        shared desire to bring that beauty to the world.
      </BodyText>
      <ImagesContainer>
        <img src={photographer1} alt="" />
        <img src={photographer2} alt="" />
      </ImagesContainer>
      <Header4>Our Mission: Capturing the Essence of the Ocean</Header4>
      <BodyText>
        At OceanCanvas, our mission is to showcase Alen Gusinac's extraordinary
        ability to capture the essence of marine life, vibrant coral reefs, and
        the boundless mysteries of the deep blue. Each photograph tells a unique
        story, inviting you to explore, connect, and bring the wonders of the
        ocean into your everyday life.
      </BodyText>
      <Header4>Why OceanCanvas?</Header4>
      <BodyText>
        <BoldBodyText>Quality Beyond Measure:</BoldBodyText> Alen's prints are
        meticulously crafted to ensure the highest quality, allowing you to
        enjoy the intricate details and vibrant colors of underwater scenes in
        every print.
      </BodyText>
      <BodyText>
        <BoldBodyText>Environmental Stewardship:</BoldBodyText> We are committed
        to responsible sourcing and production. Alen's prints are made with
        sustainability in mind, and we actively support initiatives dedicated to
        preserving our oceans.
      </BodyText>
      <Header4>Our Promise: Dive into Excellence</Header4>
      <BodyText>
        When you choose OceanCanvas, you're not just acquiring a piece of art;
        you're investing in a journey beneath the waves curated by Alen Gusinac.
        Whether you're a seasoned ocean enthusiast or a newcomer to the beauty
        of underwater photography, we invite you to explore Alen's collection
        and find the perfect print that resonates with your connection to the
        sea.
      </BodyText>
      <BodyText>
        Thank you for being a part of our ocean-inspired community. Dive into
        excellence with OceanCanvas, where every print by Alen Gusinac is a
        testament to the boundless wonders that lie beneath.
      </BodyText>
    </>
  );
};

export default About;

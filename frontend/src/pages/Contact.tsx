import MaterialIconButton from '@/components/MaterialIconButton';
import { StyledContact } from '@/components/styled/Contact.styled';
import { BodyText, Heading1 } from '@/components/styled/Text.styled';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdMailOutline, MdOutlinePhoneIphone } from 'react-icons/md';

const Contact = () => {
  const handleClick = () => {
    console.log('Click!');
  };
  return (
    <StyledContact>
      <Heading1>Contact Us</Heading1>
      <BodyText>
        Hello there! Whether you have a question, feedback, or just want to
        share your love for underwater art, we'd love to hear from you. Feel
        free to reach out through the channels below, and we'll get back to you
        as soon as the tides allow.
      </BodyText>
      <div>
        <MaterialIconButton icon={<MdMailOutline />} onClick={handleClick} />
        <a href="#">info@oceancanvas.com</a>
      </div>
      <div>
        <MaterialIconButton
          icon={<MdOutlinePhoneIphone />}
          onClick={handleClick}
        />
        <a href="#">+46123 - 12 34 56</a>
      </div>
      <div>
        <div>
          <MaterialIconButton icon={<FaFacebook />} onClick={handleClick} />
          <MaterialIconButton icon={<FaInstagram />} onClick={handleClick} />
        </div>
        <BodyText>OceanCanvas</BodyText>
      </div>
      <BodyText>
        Thank you for being a part of the OceanCanvas community. We're here to
        ensure your experience with us is as seamless as the ocean waves.
      </BodyText>
    </StyledContact>
  );
};

export default Contact;

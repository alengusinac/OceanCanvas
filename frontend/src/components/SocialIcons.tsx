import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { StyledSocialIcons } from './styled/SocialIcons.styled';

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <a href="#">
        <FaFacebook />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
    </StyledSocialIcons>
  );
};

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { StyledSocialIcons } from './styled/SocialIcons.styled';
import { memo } from 'react';

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <a aria-label="facebook link" href="http://facebook.com" target="_blank">
        <FaFacebook />
      </a>
      <a
        aria-label="instagram link"
        href="http://instagram.com"
        target="_blank"
      >
        <FaInstagram />
      </a>
    </StyledSocialIcons>
  );
};

export default memo(SocialIcons);

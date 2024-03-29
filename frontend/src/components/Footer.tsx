import logo from '@/assets/oceancanvas-logo.png';
import Newsletter from './Newsletter';
import { FooterWrapper } from './styled/Footer.styled';
import { LogoWrapper } from './styled/Logo.styled';
import SocialIcons from './SocialIcons';
import { memo } from 'react';

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper alt="OceanCanvas logo" src={logo} />

      <Newsletter />
      <SocialIcons />

      <p>&copy;2023 Alen Gusinac. All rights reserved.</p>
    </FooterWrapper>
  );
};

export default memo(Footer);

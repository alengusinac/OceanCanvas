import logo from '@/assets/oceancanvas-logo.png';
import Newsletter from './Newsletter';
import {
  FooterCopyright,
  FooterMain,
  FooterSection,
  FooterWrapper,
} from './styled/Footer.styled';
import { LogoWrapper } from './styled/Logo.styled';
import SocialIcons from './SocialIcons';
import { memo } from 'react';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMain>
        <FooterSection>
          <LogoWrapper alt="OceanCanvas logo" src={logo} />
        </FooterSection>

        <FooterSection>
          <Newsletter />
        </FooterSection>

        <FooterSection>
          <SocialIcons />
        </FooterSection>
      </FooterMain>

      <FooterCopyright>
        &copy;2023 Alen Gusinac. All rights reserved.
      </FooterCopyright>
    </FooterWrapper>
  );
};

export default memo(Footer);

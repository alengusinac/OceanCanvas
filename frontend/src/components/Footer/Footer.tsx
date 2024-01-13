import styled from 'styled-components';
import logo from '@/assets/oceancanvas-logo.png';
import { colors } from '@/styles/variables';
import Newsletter from '../Newsletter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { LogoWrapper } from '../Wrappers';

const FooterWrapper = styled.footer`
  background-color: ${colors.sand};
  height: 272px;
  width: 100%;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoWrapper src={logo} />
      <Newsletter />
      <p>Follow us</p>
      <div>
        <FacebookIcon sx={{ fontSize: 40, color: 'blue' }} />
        <InstagramIcon sx={{ fontSize: 40, color: 'blue' }} />
      </div>
    </FooterWrapper>
  );
};

export default Footer;

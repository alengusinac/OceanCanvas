import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { StyledMain } from './styled/Main.styled';
import { FlexWrapper } from './styled/Flex.styled';

const Layout = () => {
  return (
    <FlexWrapper style={{ flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </FlexWrapper>
  );
};

export default Layout;

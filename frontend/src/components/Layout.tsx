import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoBanner from '@/components/DemoBanner';
import { StyledMain } from './styled/Main.styled';
import { FlexWrapper } from './styled/Flex.styled';
import ScrollToTop from './ScrollToTop';
import { memo } from 'react';

const Layout = () => {
  return (
    <FlexWrapper style={{ flexDirection: 'column', minHeight: '100vh' }}>
      <ScrollToTop />
      <DemoBanner />
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      <Footer />
    </FlexWrapper>
  );
};

export default memo(Layout);

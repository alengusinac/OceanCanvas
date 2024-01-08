import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Layout;

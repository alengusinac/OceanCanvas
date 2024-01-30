import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout';
import Error from '@/components/Error';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Product from '@/pages/Product';
import Admin from '@/pages/Admin';
import Checkout from '@/pages/Checkout';
import OrderConfirmation from '@/pages/OrderConfirmation';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout></Layout>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
        index: true,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <Product />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/confirm-order',
        element: <OrderConfirmation />,
      },
    ],
  },
  {
    path: '/admin',
    element: <Admin></Admin>,
    errorElement: <Error />,
  },
]);

export default router;

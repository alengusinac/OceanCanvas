import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout';
import Error from '@/components/Error';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Product from '@/pages/Product';
import Admin from './pages/Admin';

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
        path: '/product/:id',
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
    ],
  },
  {
    path: '/admin',
    element: <Admin></Admin>,
    errorElement: <Error />,
  },
]);

export default router;

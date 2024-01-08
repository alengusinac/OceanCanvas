import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Error from './components/Error';
import Home from './pages/Home';

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
      // {
      //   path: '/search',
      //   element: <SearchPage />,
      // },
      // {
      //   path: '/contact',
      //   element: <Contact />,
      // },
      // {
      //   path: '/ad/:id',
      //   element: <Ad />,
      // },
    ],
  },
  {
    path: '/admin',
    element: <Layout></Layout>,
    errorElement: <Error />,
    children: [
      {
        path: '',
        element: <p>ADMIN</p>,
        index: true,
      },
      {
        path: '/admin/search',
        element: <p>ADMIN SEARCH</p>,
      },
    ],
  },
]);

export default router;

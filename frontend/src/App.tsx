import '@/styles/App.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@/Router';
import { UserProvider } from './contexts/userContext';
import { CartProvider } from './contexts/cartContext';

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;

import '@/styles/App.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@/Router';
import { UserProvider } from './contexts/userContext';
import { CartProvider } from './contexts/cartContext';
import { StripeProvider } from './contexts/stripeContext';

function App() {
  return (
    <>
      <StripeProvider>
        <UserProvider>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </UserProvider>
      </StripeProvider>
    </>
  );
}

export default App;

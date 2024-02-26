import '@/styles/App.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@/Router';
import { UserProvider } from './contexts/userContext';
import { CartProvider } from './contexts/cartContext';
import { FavoritesProvider } from './contexts/favoritesContext';

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <FavoritesProvider>
            <RouterProvider router={router} />
          </FavoritesProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;

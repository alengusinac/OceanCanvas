import '@/styles/App.scss';
import { RouterProvider } from 'react-router-dom';
import router from '@/Router';
import { UserProvider } from './contexts/userContext';

function App() {
  return (
    <>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </>
  );
}

export default App;

import Dashboard from '@/components/Dashboard/Dashboard';
import { useUserContext } from '@/hooks/useUserContext';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  return (
    <div>
      {user?.admin ? (
        <Dashboard />
      ) : (
        <button onClick={() => navigate('/')}>BACK</button>
      )}
    </div>
  );
};

export default Admin;

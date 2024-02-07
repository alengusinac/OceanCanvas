import Dashboard from '@/components/Dashboard/Dashboard';
import { useUserContext } from '@/hooks/useUserContext';
import { memo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
    if (!user?.admin) {
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default memo(Admin);

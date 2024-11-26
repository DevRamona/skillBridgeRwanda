import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

const PrivateRoute = () => {
  const { user } = useAuthContext();
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './components/store';

interface PrivateRouteProps {
  path: string;
  redirectTo: string;
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  path,
  redirectTo,
  isAuthenticated,
  children
}) => {
  const authState = useSelector((state: RootState) => state.auth);

  return isAuthenticated ? (
    <Route path={path} element={children} />
  ) : (
    <Navigate to={redirectTo} replace />
  );
};

export default PrivateRoute;

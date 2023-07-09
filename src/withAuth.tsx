import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './components/store';
import { Navigate } from 'react-router-dom';

interface WithAuthProps {
  isAuthenticated: boolean;
}

function withAuth<P extends WithAuthProps>(
  WrappedComponent: React.ComponentType<P>
): React.FC<P> {
  const WithAuth: React.FC<P> = (props) => {
    const isAuthenticated = useSelector(
      (state: RootState) => state.auth.isAuthenticated
    );

    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <Navigate to="/login" />;
    }
  };

  return WithAuth;
}

export default withAuth;

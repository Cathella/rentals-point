import { useState } from 'react';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const authContextValue: AuthContextValue = {
    isLoggedIn,
    handleLogin,
    handleLogout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

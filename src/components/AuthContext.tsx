import { createContext } from 'react';

interface AuthContextValue {
  isLoggedIn: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export default AuthContext;

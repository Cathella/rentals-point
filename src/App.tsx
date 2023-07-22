import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { ReactNode } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PropertyForm from './pages/PropertyForm';
import PropertyList from './pages/PropertyList';
import PropertyUpdateForm from './pages/PropertyUpdateForm';
import PropertyDetails from './pages/PropertyDetails';
import Dashboard from './pages/Dashboard';
import Nav from './components/Nav';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './components/store';
import PropertyDelete from './pages/PropertyDelete';
import RentShare from './pages/RentShare';
import MyProfile from './pages/MyProfile';

interface ProtectedRouteProps {
  redirectTo: string;
  children: ReactNode;
  loggedIn: boolean;
  username: string;
  accountType: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectTo,
  children,
  loggedIn,
  // username,
  // account
}) => {
  if (loggedIn) {
    return <>{children}</>;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
};

function App() {
  const { loggedIn, username, account } = useSelector((state: RootState) => state.auth);

  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propertylist" element={<PropertyList />} />
          <Route path="/propertylist/:propertyId" element={<PropertyDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rentshare" element={<RentShare />} />
          <Route
            path="/listingform"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} accountType={account}>
                <PropertyForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} accountType={account}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/propertylist/update/:propertyId"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} accountType={account}>
                <PropertyUpdateForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/propertylist/:propertyId/delete"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} accountType={account}>
                <PropertyDelete />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myprofile"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} accountType={account}>
                <MyProfile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithRedux;

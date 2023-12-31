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
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import CreateProfile from './pages/CreateProfile';
import ListProfiles from './pages/ListProfiles';

interface ProtectedRouteProps {
  redirectTo: string;
  children: ReactNode;
  loggedIn: boolean;
  username: string;
  account: string;
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
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <PropertyForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/propertylist/update/:propertyId"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <PropertyUpdateForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/propertylist/:propertyId/delete"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <PropertyDelete />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/new"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <CreateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/edit"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profiles"
            element={
              <ProtectedRoute redirectTo="/login" loggedIn={loggedIn} username={username} account={account}>
                <ListProfiles />
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

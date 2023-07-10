import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { ReactNode } from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';
import PropertyDetails from './PropertyDetails';
import Dashboard from './Dashboard';
import Nav from './components/Nav';
import { Provider, useSelector } from 'react-redux';
import store, { RootState } from './components/store';
import ListingUpdateForm from './ListingUpdateForm';

interface ProtectedRouteProps {
  redirectTo: string;
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  redirectTo,
  children
}) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <>{children}</>;
  } else {
    return <Navigate to={redirectTo} replace />;
  }
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propertylist" element={<PropertyList />} />
            <Route path="/propertylist/:propertyId" element={<PropertyDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/listing/update/:listingId" element={<ListingUpdateForm />} />
            <Route
              path="/listingform"
              element={
                <ProtectedRoute redirectTo="/login">
                  <PropertyForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute redirectTo="/login">
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

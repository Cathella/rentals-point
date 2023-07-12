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
            <Route
              path="/propertylist/update/:propertyId"
              element={
                <ProtectedRoute redirectTo="/login">
                  <PropertyUpdateForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/propertylist/:propertyId/delete"
              element={
                <ProtectedRoute redirectTo="/login">
                  <PropertyDelete />
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

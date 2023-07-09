import { BrowserRouter, Routes, Route, Navigate, RouteProps } from 'react-router-dom';
import React from 'react';
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

const ProtectedRoute: React.FC<RouteProps> = ({ path, element, ...rest }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? (
    <Route path={path} element={element} {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
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
              element={<ProtectedRoute element={<PropertyForm />} />}
            />
            <Route
              path="/dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

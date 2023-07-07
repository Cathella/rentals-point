// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';
import PropertyDetails from './PropertyDetails';
import Dashboard from './Dashboard';
import Nav from './components/Nav';
import { Provider } from 'react-redux';
import store from './store';

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
            <Route path='/listingform' element={<PropertyForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App;

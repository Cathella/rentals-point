import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import PropertyForm from './PropertyForm';
import PropertyList from './PropertyList';
import PropertyDetails from './PropertyDetails';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propertylist" element={<PropertyList />} />
          {/* <Route path="/propertylist/:propertyId" element={<PropertyDetails />} /> */}
          <Route path="/propertylist/:propertyId" render={({ match }) => <PropertyDetails propertyId={match.params.propertyId} />} />
          <Route path='/listingform' element={<PropertyForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
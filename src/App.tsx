import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Properties from './Properties';
import Details from './Details';
// import ForLandlords from './ForLandlords';
import Login from './Login';
import SignUp from './SignUp';
import PropertyForm from './PropertyForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<Details />} />
          {/* <Route path="/landlords" element={<ForLandlords />} /> */}
          <Route path='/listingform' element={<PropertyForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
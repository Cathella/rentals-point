import { Link, useNavigate } from 'react-router-dom';
import TopLogo from './assets/logowhite.svg';
import SideImage from './components/SideImage';
import { useState, FormEvent, useEffect } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // create the login data object with email and password
    const loginData = {
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:3000/api/v1/login', { loginData });

      if (response.status === 200) {
        // User login successful
        console.log('User login successful');
        navigate('/dashboard');
      } else {
        console.error('Failed to login:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  useEffect(() => {
    // Check if the user is already logged in
    // Implement your logic here (e.g., check if there is a valid session token)
    // If the user is logged in, setLoggedIn(true)
  }, []);

  // if (loggedIn) {
  //   return <Redirect to="/dashboard" />;
  // }

  return (
    <>
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 mx-auto">
              <div className="text-center mt-5">
                <Link id='loginLogo' className="navbar-brand" to="/">
                  <img src={TopLogo} alt="RentalsPoint" />
                </Link>
              </div>
              <div className="text-center desc-ft-size custom-text-muted mt-5">Sign into your Rentals Point Account.</div>
              <div className="mt-5 login-links">
                <a id='with-email' href="#collapseExample" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">Continue with Email</a>
                <div className="collapse wid-100" id="collapseExample">
                  <div className="border shadow-sm px-4 py-4 rounded-4">
                    <form onSubmit={handleSubmit}>
                      <div className="form-floating mb-3">
                        <input 
                          type="email"
                          placeholder='' 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className='form-control' />
                          <label>Email</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input 
                          type="password"
                          placeholder=''
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} 
                          className='form-control' />
                          <label>Password</label>
                      </div>
                      <button id='login-submit' className="custom-button form-control custom-dark-green text-white" type="submit">Login</button>
                    </form>
                  </div>
                </div>
                <a id='with-google' href="#">Continue with Google</a>
                <a id='with-facebook' href="#">Continue with Facebook</a>
              </div>
              <div className="border-top text-center mt-5 pt-4 pb-5">
                Are you new here? <Link className="green-txt" to="/signup">Create Account</Link>
              </div>
            </div>
            <SideImage />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

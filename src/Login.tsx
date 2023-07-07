import { Link, useNavigate } from 'react-router-dom';
import SideImage from './components/SideImage';
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from './components/actions';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create the user object with form data
    const user = {
      email,
      password,
    };

    try {
      // Dispatch the login action
      dispatch(login());
      
      const response = await axios.post('http://localhost:3000/api/v1/login', user);

      if (response.status === 200) {
        // User login successful, navigate to the Dashboard component
        navigate('/dashboard');
      } else {
        console.error('Failed to login:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 mx-auto">
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

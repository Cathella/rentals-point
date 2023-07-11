import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../components/actions';
import Facebook from '../assets/facebook-white.svg';
import Google from '../assets/google.svg';

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
              <div className="text-center mt-5 mb-4">
                <h4>Welcome Back!</h4>
                <p className='custom-text-muted'>Dont have an account? <Link className="green-txt" to="/signup">Create One</Link></p>
              </div>
              <div className="login-links mb-5">
                <a id='with-google' href="#">
                  <img src={Google} alt="" />
                  Continue with Google
                </a>
                <a id='with-facebook' href="#"><img src={Facebook} alt="" /></a>
              </div>
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
              <div className="text-center mt-4 pb-5">
                <Link className="green-txt" to="/signup">Forgot Password?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

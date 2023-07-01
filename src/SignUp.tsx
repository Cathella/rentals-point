import { Link } from 'react-router-dom';
import TopLogo from './assets/logowhite.svg';
import SideImage from './components/SideImage';
import { useState, FormEvent } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [account, setAccount] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Create the user object with form data
    const user = {
      username,
      email,
      password,
      account
    };

    try {
      const response = await axios.post('http://localhost:3000/api/v1/users', { user });

      if (response.status === 201) {
        // User signup successful, perform any necessary actions (e.g., redirect, show success message)
        console.log('User signup successful');

        setUsername('');
        setEmail('');
        setPassword('');
        setAccount('');
      } else {
        console.error('Failed to signup:', response.statusText);
      }
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

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
            <div className="text-center desc-ft-size custom-text-muted mt-5">Create a New Rentals Point Account.</div>
            <div className="mt-5 login-links">
              <a id='with-email' href="#collapseExample" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">Signup with Email</a>
              <div className="collapse wid-100" id="collapseExample">
                <div className="border shadow-sm px-4 py-4 rounded-4">
                  <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                      <input 
                        type="text"
                        placeholder=''
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='form-control' />
                        <label>Username</label>
                    </div>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='' 
                        className='form-control' />
                        <label>Password</label>
                    </div>
                    <div className="form-floating mb-3">
                      <select 
                        value={account} 
                        onChange={(e) => setAccount(e.target.value)}
                        className="form-select">
                        <option value="">-- Select Account --</option>
                        <option value="tenant">I am a Tenant</option>
                        <option value="landlord">I am a Landlord</option>
                      </select>
                      <label>Choose Account</label>
                    </div>
                    <button id='login-submit' className="custom-button form-control custom-dark-green text-white" type="submit">Create Account</button>
                  </form>
                </div>
              </div>
              <a id='with-google' href="#">Signup with Google</a>
              <a id='with-facebook' href="#">Signup with Facebook</a>
            </div>
            <div className="border-top text-center mt-5 pt-4">
              Already have an Account? <Link className="green-txt" to="/login">Login</Link>
            </div>
          </div>
            <SideImage />
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;

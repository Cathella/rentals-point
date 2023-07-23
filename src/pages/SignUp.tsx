import { Link, useNavigate } from 'react-router-dom';
import { useState, FormEvent } from 'react';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
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
        navigate('/login');
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
            <div className="text-center mt-5 mb-5">
              <h3>Sign up, then Relax!</h3>
              <p className='custom-text-muted'>Save time as we do the hard work for you.</p>
            </div>
            {/* <div className="mb-5 login-links">
                <a id='with-google' href="#">
                  <img src={Google} alt="" />
                  Continue with Google
                </a>
                <a id='with-facebook' href="#"><img src={Facebook} alt="" /></a>
            </div> */}
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
            <div className="text-center mt-4 mb-5">
              <p className='custom-text-muted'>Already have an Account? <Link className="green-txt" to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default SignUp;

import { Link } from 'react-router-dom';
import TopLogo from './assets/logowhite.svg';
import SideImage from './components/SideImage';

function Login() {
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
                <a href="#collapseExample" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">Login with Email</a>
                <div className="collapse wid-100" id="collapseExample">
                  <div className="border shadow-sm px-4 py-4 rounded-4">
                    <form>
                      <div className="form-floating mb-3">
                        <input 
                          type="email"
                          placeholder='' 
                          className='form-control' />
                          <label>Email Address</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input 
                          type="password"
                          placeholder='' 
                          className='form-control' />
                          <label>Password</label>
                      </div>
                      <button id='login-submit' className="custom-button form-control custom-dark-green text-white" type="submit">Login</button>
                    </form>
                  </div>
                </div>
                <a href="#">Login with Google</a>
                <a href="#">Login with Facebook</a>
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

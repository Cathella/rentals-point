import { Link } from 'react-router-dom';
import TopLogo from './assets/logowhite.svg';

function Login() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 mx-auto">
              <div className="text-center">
                <Link id='loginLogo' className="navbar-brand" to="/">
                  <img src={TopLogo} alt="RentalsPoint" />
                </Link>
              </div>
              <div className="text-center desc-ft-size custom-text-muted mt-5">Sign in to your Rentals Point Account.</div>
              <div className="mt-5 login-links">
                <a href="#">Login with Email</a>
                <a href="#">Login with Google</a>
                <a href="#">Login with Facebook</a>
              </div>
              <div className="border-top text-center mt-5 pt-4">
                Are you new here? <Link className="green-txt" to="/signup">Create Account</Link>
              </div>
              {/* <div className="mt-5">
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-4" id="yuyuyu">
                    <input
                      type="email"
                      id="username"
                      className="form-control"
                      placeholder="name@example.com"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="username">Username</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="form-check mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberMe"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                  </div>
                  <button id="login-submit" className="custom-button form-control custom-dark-green text-white" type="submit">Submit</button>
                </form>
              </div> */}
              {/* <div className="text-center mt-3 mb-5">
                <a href="#" id="greened">Forgot Password?</a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

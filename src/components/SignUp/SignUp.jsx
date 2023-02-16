import React, { Fragment } from "react";
import classes from "./SignUp.module.css";

const SignUp = () => {
  return (
    <Fragment>
      <div>test</div>

      {/* <div className="login">
      <div className="login-form">
        <div className="form">
          <img src={Logo} alt="nav-logo" />
          <h3>Welcome Back!</h3>
          <p>Email</p>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Contoh: aprijanti@gmail.com"
            variant="outlined"
            style={{ width: 370 }}
          />
          <p>Password</p>
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            label="6+ karakter"
            variant="outlined"
            style={{ width: 370 }}
          />
          <br />
          <button onClick={klikLogin} className="button-registration">
            Sign In
          </button>
        </div>
        <p style={{ textAlign: "center" }}>
          Don’t have an account? <Link to="/signup">Sign Up for free</Link>
        </p>
      </div>
      <div className="login-landing">
        <h1>Binar Car Rental</h1>
        <img src={LandingPage} alt="landing-page" />
      </div>
    </div> */}
    </Fragment>
  );
};

export default SignUp;

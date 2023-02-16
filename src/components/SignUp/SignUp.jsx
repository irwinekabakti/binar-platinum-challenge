import React, { Fragment } from "react";
import classes from "./SignUp.module.css";
import logoLogin from "../Images/Logo-login.svg";
import landingPage from "../Images/Landing-page.svg";
import { Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Fragment>
      <div className="d-flex bg-light">
        <div className="col-lg-6 col-md-6">
          <div className={`container`}>
            <div className={`d-block ${classes.formControl}`}>
              <Nav.Link as={Link} to="/" className={`mb-5 w-25 Sign-In-brand`}>
                <img src={logoLogin} alt="Sign In BCR" />
              </Nav.Link>
              <h1 className="mb-5 fw-bold text-black">Sign Up</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name*</Form.Label>
                  <Form.Control type="text" placeholder="Cristiano Penaldo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example: emyunihbos@gmail.co.uk"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Create Password*</Form.Label>
                  <Form.Control type="password" placeholder="6+ character" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className={`w-100 mt-4 fw-bold ${classes.buttonSignUp}`}>
                  Sign Up
                </Button>

                <div className="d-flex mt-3 justify-content-center">
                  <p className="text-dark fs-6 me-4">
                    Already have an account ?
                  </p>
                  <a className={`me-4 fw-bold ${classes.linkA}`} href="/signIn">
                    Sign In here
                  </a>
                </div>
              </Form>
            </div>
          </div>
        </div>
        <div className={`col-lg-6 col-md-6 background2 ${classes.background2}`}>
          <div className="sign-up-page" id="sign-up">
            <div className="ms-5">
              <h1
                className={`fw-bold d-flex justify-content-start ${classes.heading}`}>
                Binar Car Rental
              </h1>
            </div>
            <div className="ms-5">
              <div className="image-page mt-5 d-flex justify-content-end">
                <img
                  src={landingPage}
                  alt="images-landing-page"
                  className={classes.imagesLandingPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SignUp;

/*
<div>test</div>

      <div className="login">
      <div className="login-form">
        <div className="form">
          <img src={logoLogin} alt="nav-logo" />
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
        <img src={landingPage} alt="landing-page" />
      </div>
    </div>
*/

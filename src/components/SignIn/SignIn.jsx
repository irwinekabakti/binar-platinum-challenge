import React, { Fragment } from "react";
import classes from "./SignIn.module.css";
import logoLogin from "../Images/Logo-login.svg";
import landingPage from "../Images/Landing-page.svg";
import { Button, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <Fragment>
      <div className="d-flex bg-light">
        <div className="col-lg-6 col-md-6">
          <div className="container justify-content-center align-self-center">
            <div className={`d-block ${classes.formControl}`}>
              <Nav.Link as={Link} to="/" className={`mb-5 w-25 Sign-In-brand`}>
                <img src={logoLogin} alt="Sign In BCR" />
              </Nav.Link>
              <h1 className="mb-5 fw-bold text-black">Welcome Back!</h1>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example: emyunihbos@gmail.co.uk"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="6+ character" />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  className={`w-100 mt-4 fw-bold ${classes.buttonSignUp}`}>
                  Sign In
                </Button>

                <div className="d-flex mt-3 justify-content-center">
                  <p className="text-dark fs-6 me-4">Don't have an account ?</p>
                  <a className={`me-4 fw-bold ${classes.linkA}`} href="/signUp">
                    Sign Up for free
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

export default SignIn;

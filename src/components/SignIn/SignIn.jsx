import React, { Fragment, useState } from "react";
import classes from "./SignIn.module.css";
import logoLogin from "../Images/Logo-login.svg";
import landingPage from "../Images/Landing-page.svg";
import { Button, Form, Nav, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginCustomer } from "../../store/action/action-slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SignIn = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [icon, setIcon] = useState(false);
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [loading, setLoading] = useState();
  const [isError, setIsError] = useState(false);

  const handlingEmail = (e) => {
    e.preventDefault();
    setInputEmail(e.target.value);
  };

  const handlingPassword = (e) => {
    e.preventDefault();
    setInputPassword(e.target.value);
  };

  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
    setIcon(!icon);
  };

  const navigate = useNavigate();

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(`login is here`);
    dispatch(loginCustomer({ email: inputEmail, password: inputPassword }))
      .unwrap()
      .then(() => {
        navigate("/");
        setLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setLoading(false);
        console.log(error);
      });
  };

  return (
    <Fragment>
      {loading ? (
        <div style={{ margin: "25% auto" }}>
          <Loading />
        </div>
      ) : (
        <div className="d-flex bg-light">
          <div className="col-lg-6 col-md-6">
            <div className="container justify-content-center align-self-center">
              <div className={`d-block ${classes.formControl}`}>
                <div className="d-flex justify-content-between">
                  <Nav.Link
                    as={Link}
                    to="/"
                    className={`mb-5 w-25 Sign-In-brand`}>
                    <img src={logoLogin} alt="Sign In BCR" />
                  </Nav.Link>
                </div>
                <h1 className="mb-5 fw-bold text-black">Welcome Back!</h1>
                {isError ? (
                  <div
                    style={{
                      padding: "12px 25px",
                      background: "rgba(208, 12, 26, 0.1)",
                      borderRadius: "5px",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "0.75rem",
                      lineHeight: 1.5,
                      marginBottom: "2rem",
                      color: "#D00C1A",
                    }}>
                    Masukkan username dan password yang benar. Perhatikan
                    penggunaan huruf kapital.
                  </div>
                ) : null}
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example: emyunihbos@gmail.co.uk"
                      onChange={handlingEmail}
                    />
                  </Form.Group>

                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      data-testid="change-password-button-control"
                      type={passwordShown ? "text" : "password"}
                      placeholder="6+ character"
                      onChange={handlingPassword}
                    />
                    <Button
                      data-testid="change-password-button"
                      variant="outline-primary"
                      id="button-addon2"
                      type="button"
                      onClick={togglePasswordVisibility}>
                      {icon ? <FaEye /> : <FaEyeSlash />}
                    </Button>
                  </InputGroup>
                  <Button
                    variant="primary"
                    type="submit"
                    className={`w-100 mt-4 fw-bold ${classes.buttonSignUp}`}>
                    Sign In
                  </Button>
                  <div className="d-flex mt-3 justify-content-center">
                    <p className="text-dark fs-6 me-4">
                      Don't have an account ?
                    </p>
                    <a
                      className={`me-4 fw-bold ${classes.linkA}`}
                      href="/signUp">
                      Sign Up for free
                    </a>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div
            className={`col-lg-6 col-md-6 background2 ${classes.background2}`}>
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
      )}
    </Fragment>
  );
};

export default SignIn;

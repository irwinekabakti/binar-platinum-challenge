import React, { Fragment, useState } from "react";
import classes from "./SignUp.module.css";
import logoLogin from "../Images/Logo-login.svg";
import landingPage from "../Images/Landing-page.svg";
import {
  Button,
  Form,
  Nav,
  InputGroup,
  Toast,
  ToastContainer,
  ToastHeader,
  ToastBody,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { registerCustomer } from "../../store/action/register-slice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [icon, setIcon] = useState(false);
  const [inputName, setName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [showToast, setShowToast] = useState(false);
  const [showToastError, setShowToastError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
    setIcon(!icon);
  };

  const handlingName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handlingEmail = (e) => {
    e.preventDefault();
    setInputEmail(e.target.value);
  };

  const handlingPassword = (e) => {
    e.preventDefault();
    setInputPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(
      registerCustomer({
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      })
    )
      .unwrap()
      .then(() => {
        setTimeout(() => {
          setShowToast(true);
        }, 1000);

        setTimeout(() => {
          navigate("/signIn");
        }, 3000);
      })
      .catch((error) => {
        setTimeout(() => {
          setShowToastError(true);
        }, 1500);
      });
  };

  return (
    <Fragment>
      {showToast ? (
        <ToastContainer className="p-3" position="top-center">
          <Toast
            className="d-inline-block m-1"
            bg="success"
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}>
            <ToastHeader>
              <strong className="me-auto text-dark">Message</strong>
              <small className="text-dark">now</small>
            </ToastHeader>
            <ToastBody className="text-white fw-bold">
              Register Successful !
            </ToastBody>
          </Toast>
        </ToastContainer>
      ) : null}
      {showToastError ? (
        <ToastContainer className="p-3" position="top-center">
          <Toast
            className="d-inline-block m-1"
            bg="danger"
            onClose={() => setShowToastError(false)}
            show={showToastError}
            delay={3000}>
            <ToastHeader>
              <strong className="me-auto text-dark">Message</strong>
              <small className="text-dark">now</small>
            </ToastHeader>
            <ToastBody className="text-white fw-bold">
              Register failed ! Please try again
            </ToastBody>
          </Toast>
        </ToastContainer>
      ) : null}
      <div className="d-flex bg-light">
        <div className="col-lg-6 col-md-6">
          <div className={`container`}>
            <div className={`d-block ${classes.formControl}`}>
              <Nav.Link as={Link} to="/" className={`mb-5 w-25 Sign-In-brand`}>
                <img src={logoLogin} alt="Sign In BCR" />
              </Nav.Link>
              <h1 className="mb-5 fw-bold text-black">Sign Up</h1>
              <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cristiano Penaldo"
                    onChange={handlingName}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example: emyunihbos@gmail.co.uk"
                    onChange={handlingEmail}
                  />
                </Form.Group>

                <Form.Label>Create Password*</Form.Label>
                <InputGroup
                  className="mb-3 create-password"
                  id="create-password">
                  <Form.Control
                    type={passwordShown ? "text" : "password"}
                    placeholder="6+ character"
                    onChange={handlingPassword}
                  />
                  <Button
                    variant="outline-primary"
                    id="button-addon2"
                    onClick={togglePasswordVisibility}>
                    {icon ? <FaEye /> : <FaEyeSlash />}
                  </Button>
                </InputGroup>
                <Button
                  variant="primary"
                  type="submit"
                  data-testid="button-SignUp"
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

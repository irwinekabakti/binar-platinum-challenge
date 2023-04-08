import React, { Fragment, useState } from "react";
import classes from "./Navbar.module.css";
import {
  Nav,
  Toast,
  ToastContainer,
  ToastHeader,
  ToastBody,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import link_Paths from "./data";
import logoHome from "../Images/logo.svg";
import { useDispatch } from "react-redux";
import { logout } from "../../store/action/action-slice";

const Navbar = () => {
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isTokenExist = localStorage.getItem("token");
  const isReg = localStorage.getItem("role");

  const handleLogout = () => {
    // dispatch(logout());
    setTimeout(() => {
      setShowToast(true);
    }, 1000);
    setTimeout(() => {
      dispatch(logout());
    }, 2500);
    setTimeout(() => {
      navigate("/signIn");
    }, 3000);
  };

  const handleRegister = () => {
    navigate("/signIn");
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
              Logout Successful !
            </ToastBody>
          </Toast>
        </ToastContainer>
      ) : null}
      <nav
        className={`navbar navbar-expand-lg fixed-top ${classes.navbarColor}`}>
        <div className="container-fluid">
          <Nav.Link
            as={Link}
            to="/"
            className={`navbar-brand ${classes.navbarBrand1}`}>
            <img src={logoHome} alt="Home BCR" />
          </Nav.Link>
          <button
            className={`navbar-toggler ${classes.navTog}`}
            type="button"
            data-testid="btn-navbar-hamburger"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            data-testid="toggle-navbar-hamburger"
            style={{ width: "50%" }}
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">
                BCR
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {link_Paths.map((link) => (
                  <li className="nav-item" key={link.id}>
                    <a
                      className={`nav-link me-4 ${classes.navbarNavLink}`}
                      href={link.path}>
                      {link.name}
                    </a>
                  </li>
                ))}
                {isTokenExist || isReg ? (
                  <button
                    style={{ border: "none", outline: "none" }}
                    data-testid="test-ButtonLogout"
                    id="test1"
                    className={`nav-link text-light me-4 mt-1 ${classes.navbarLogout}`}
                    onClick={handleLogout}>
                    Logout
                  </button>
                ) : (
                  <button
                    style={{ border: "none", outline: "none" }}
                    data-testid="test-btnRegister"
                    className={`nav-link text-light me-4 mt-1 ${classes.navbarRegister}`}
                    onClick={handleRegister}>
                    Register
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

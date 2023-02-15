import React from "react";
import classes from "./Footer.module.css";
import { contact_Footer, paths_Footer, social_Media } from "./data";
import logoHome from "../Images/logo.svg";

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <div className="container py-5 pt-0">
        <div className="row">
          <div className="col-lg-3 mb-3">
            <ul className="list-unstyled">
              {contact_Footer.map((item) => (
                <li className="mb-2" key={item.id}>
                  <p className="fw-bold">{item.data}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-2 mb-3">
            <ul className="list-unstyled">
              {paths_Footer.map((path) => (
                <li className={`mb-2 ${classes.listLink}`} key={path.id}>
                  <a
                    href={path.path}
                    className={`text-decoration-none ${classes.linkFooter}`}>
                    {path.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 mb-3">
            <p className="fw-bold mb-2 ">Connect with us</p>
            <div className={classes.footerSocial}>
              {social_Media.map((account) => (
                <a
                  href={account.link}
                  className={`text-decoration-none ${classes.footerSocial}`}
                  key={account.id}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    src={account.img}
                    alt={account.alt_Img}
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title={account.title}></img>
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-3 mb-3">
            <p className="fw-bold mb-2">Copyright Binar 2022</p>
            <a className="navbar-brand" href="/">
              <img src={logoHome} alt="Home BCR" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

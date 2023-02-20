import React, { Fragment, useState } from "react";
import classes from "./CardPayment.module.css";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import ButtonToolbar from "react-bootstrap/ButtonToolbar";
// import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";

const CardPayment = () => {
  return (
    <Fragment>
      <section id="card-payment" className={`container ${classes.cardPayment}`}>
        <div className="row justify-content-center">
          <div className="col-lg-7 g-4">
            <div className="card">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Pilih Bank Transfer</h6>
              <p className="ms-4 mt-2">
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </p>

              {/* <form>
                <ul className="list-group list-group-flush mt-4">
                  <li className="list-group-item ms-3 me-3 d-flex">
                    <button
                      className={`rounded bg-white text-dark btn btn-outline-secondary text-center mb-3 ${classes.btnBank}`}>
                      BCA
                    </button>
                    <a
                      href="/bayar"
                      className="text-decoration-none text-dark w-100">
                      <h5 className="ms-5 mt-2">BCA Transfer</h5>
                    </a>
                  </li>
                  <li className="list-group-item mt-3 ms-3 me-3 d-flex">
                    <button
                      className={`rounded bg-white text-dark btn btn-outline-secondary text-center mb-3 ${classes.btnBank}`}>
                      BNI
                    </button>
                    <a
                      href="/bayar"
                      className="text-decoration-none text-dark w-100">
                      <h5 className="ms-5 mt-2">BNI Transfer</h5>
                    </a>
                  </li>
                  <li className="list-group-item mt-3 ms-3 me-3 d-flex">
                    <button
                      className={`rounded bg-white text-dark btn btn-outline-secondary text-center mb-3 ${classes.btnBank}`}>
                      Mandiri
                    </button>
                    <a
                      href="/bayar"
                      className="text-decoration-none text-dark w-100">
                      <h5 className="ms-5 mt-2">Mandiri Transfer</h5>
                    </a>
                  </li>
                  <li className="list-group-item ms-3 mt-3 me-3 d-flex"></li>
                </ul>
              </form> */}

              <form>
                <ul className="list-group list-group-flush mt-4">
                  <li className="list-group-item mx-3 d-flex">
                    <div className="card fs-5 py-2 px-4 mb-3 text-center">
                      BCA
                    </div>
                    <h5 className="ms-5 mt-3">BCA Transfer</h5>
                  </li>
                  <li className="list-group-item mx-3 mt-3 d-flex">
                    <div className="card fs-5 py-2 px-4 mb-3 text">BNI</div>
                    <h5 className="ms-5 mt-3">BNI Transfer</h5>
                  </li>
                  <li className="list-group-item mx-3 mt-3 d-flex">
                    <div className="card py-2 px-2 fs-5  mb-3 text">
                      Mandiri
                    </div>
                    <h5 className="ms-5 mt-3">Mandiri Transfer</h5>
                  </li>
                  <li className="list-group-item mb-3 d-flex"></li>
                </ul>
              </form>
            </div>
          </div>
          <div className="col-lg-5 g-4">
            <div className="card">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Yang ini belum</h6>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CardPayment;
/* <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
  <ButtonGroup className="me-2 w-25" aria-label="First group">
    <Button variant="outline-secondary" className="ms-4">
      BCA
    </Button>
  </ButtonGroup>
  <div className="card-none ">
    <div className="card-body">
      <div className="card-title h-75">BCA Transfer</div>
    </div>
  </div>
</ButtonToolbar> */

/*
  <div className="account-bank-BCA ms-4 mt-2 d-flex text-align-center">
    <div className="card w-25">
      <p className="text-center">BCA</p>
    </div>
    <p className="ms-5">BCA Transfer</p>
  </div>
  <div className="account-bank-BCA ms-4 mt-4 d-flex text-align-center">
    <div className="card w-25">
      <p className="text-center">BCA</p>
    </div>
    <p className="ms-5">BCA Transfer</p>
  </div>
  <div className="account-bank-BCA ms-4 mt-4 mb-5 d-flex text-align-center">
    <div className="card w-25">
      <p className="text-center">BCA</p>
    </div>
    <p className="ms-5">BCA Transfer</p>
  </div>
*/

import React, { Fragment, useState } from "react";
import classes from "./CardPayment.module.css";
import { Accordion } from "react-bootstrap";
import stripPembayaran from "../Images/strip-total-pembayaran.svg";
import "../../Accordion.css";
import { Button } from "react-bootstrap";
import checklistBank from "../Images/checklistBank.svg";

const CardPayment = () => {
  const [isCheckBca, setIsCheckBca] = useState(false);
  const [isCheckBni, setIsCheckBni] = useState(false);
  const [isCheckMandiri, setIsCheckMandiri] = useState(false);
  const [bca, setBca] = useState();
  const [bni, setBni] = useState();
  const [mandiri, setMandiri] = useState();

  const handleBankBca = () => {
    setIsCheckBca(!isCheckBca);
    setBca(!bca);
  };

  const handleBankBni = () => {
    setIsCheckBni(!isCheckBni);
    setBni(!bni);
  };

  const handleBankMandiri = () => {
    setIsCheckMandiri(!isCheckMandiri);
    setMandiri(!mandiri);
  };

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
              <form>
                <ul className="list-group list-group-flush mt-4">
                  <li
                    className={`list-group-item mx-3 d-flex ${classes.bankTransferPoint}`}
                    onClick={handleBankBca}>
                    <div className="card fs-5 py-2 px-4 mb-3 text-center">
                      BCA
                    </div>
                    <h5 className={`ms-4 mt-3 ${classes.bankName}`}>
                      BCA Transfer
                    </h5>
                    {isCheckBca ? (
                      <img
                        src={checklistBank}
                        alt="checklist-bank"
                        className={`${classes.checklistBank}`}
                      />
                    ) : null}
                  </li>
                  <li
                    className={`list-group-item mx-3 mt-3 d-flex ${classes.bankTransferPoint}`}
                    onClick={handleBankBni}>
                    <div className="card fs-5 py-2 px-4 mb-3 text">BNI</div>
                    <h5 className={`ms-4 mt-3 ${classes.bankName}`}>
                      BNI Transfer
                    </h5>
                    {isCheckBni ? (
                      <img
                        src={checklistBank}
                        alt="checklist-bank"
                        className={classes.checklistBank}
                      />
                    ) : null}
                  </li>
                  <li
                    className={`list-group-item mx-3 mt-3 d-flex ${classes.bankTransferPoint}`}
                    onClick={handleBankMandiri}>
                    <div className="card py-2 px-2 fs-5  mb-3 text">
                      Mandiri
                    </div>
                    <h5 className={`ms-4 mt-3 ${classes.bankName}`}>
                      Mandiri Transfer
                    </h5>
                    {isCheckMandiri ? (
                      <img
                        src={checklistBank}
                        alt="checklist-bank"
                        className={classes.checklistBank}
                      />
                    ) : null}
                  </li>
                  <li className="list-group-item mb-3 d-flex"></li>
                </ul>
              </form>
            </div>
          </div>
          <div className="col-lg-5 g-4">
            <div className="card mt-2 mb-2">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Ini Mobil</h6>
              <i className="bi bi-people ms-4">
                <span className="fw-bold ms-2">small</span>
              </i>
              <Accordion className="mt-3 mb-1" defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Total : Rp 2.000.000</Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <h6 className="fw-bold totalHarga">Harga</h6>
                      <ul className="mt-1 mb-3">
                        <div className="d-flex justify-content-between">
                          <li className="sewa">
                            Sewa Mobil Rp. 500.000 x 7 hari
                          </li>
                          <h6 className="totalSewa"> 3.500.000</h6>
                        </div>
                      </ul>
                      <h6 className="fw-bold mt-3 biayaLainnya">
                        Biaya Lainnya
                      </h6>
                      <ul className="mt-3 mb-3">
                        <div className="d-flex justify-content-between">
                          <li className="pajak">Pajak</li>
                          <p className="text-success">Termasuk</p>
                        </div>
                        <div className="d-flex justify-content-between">
                          <li className="makanSopir">Biaya makan sopir</li>
                          <p className="text-success">Termasuk</p>
                        </div>
                      </ul>
                      <h6 className="fw-bold mt-3 belumTermasuk">
                        Belum Termasuk
                      </h6>
                      <ul className="mt-3 mb-3">
                        <li className="bensin">Bensin</li>
                        <li className="parkir mt-3">Tol dan parkir</li>
                      </ul>
                      <img
                        src={stripPembayaran}
                        alt="strip-pembayaran"
                        className="w-100"
                      />
                      <div className="d-flex justify-content-between">
                        <p className="fw-bold totalHarga">Total </p>
                        <p className="fw-bold"> 5.000.000</p>
                      </div>
                      {isCheckBca || isCheckBni || isCheckMandiri ? (
                        <Button
                          size="md"
                          className={`w-100 ${classes.btnBayar}`}>
                          Bayar
                        </Button>
                      ) : (
                        <Button
                          size="md"
                          className={`w-100 ${classes.btnBayar}`}
                          disabled>
                          Bayar
                        </Button>
                      )}
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CardPayment;

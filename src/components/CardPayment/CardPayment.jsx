import React, { Fragment, useState } from "react";
import classes from "./CardPayment.module.css";
import { Accordion } from "react-bootstrap";
import stripPembayaran from "../Images/strip-total-pembayaran.svg";
import "../../Accordion.css";
import { Button } from "react-bootstrap";
import checklistBank from "../Images/checklistBank.svg";
import { useDispatch } from "react-redux";
import { updateBankName } from "../../store/action/bank-slice";
import { useSelector } from "react-redux";
import moment from "moment";

const CardPayment = () => {
  const [bankID, setBankID] = useState(null);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.bankStore);
  const selectedCar = selector.getCarData;
  const updatedOrderedCar = selector.updateCar;
  const choosePayment = selector.bankName;

  const banks = [
    { id: "BCA", name: "BCA Transfer", isChecked: false },
    { id: "BNI", name: "BNI Transfer", isChecked: false },
    { id: "Mandiri", name: "Mandiri Transfer", isChecked: false },
  ];

  const handleBankClick = (id) => {
    dispatch(updateBankName(id));
    setBankID(id);
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
                  {banks.map((bank) => (
                    <li
                      className={`list-group-item mx-3 mt-3 d-flex ${classes.bankTransferPoint}`}
                      key={bank.id}
                      onClick={() => handleBankClick(bank.id)}>
                      <div className="card fs-5 py-2 px-4 mb-3 text">
                        {bank.id}
                      </div>
                      <h5 className={`ms-4 mt-3 ${classes.bankName}`}>
                        {bank.name}
                      </h5>
                      {bank.id === bankID ? (
                        <img
                          src={checklistBank}
                          alt="checklist-bank"
                          className={classes.checklistBank}
                        />
                      ) : null}
                    </li>
                  ))}
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
                  <Accordion.Header>
                    Total : Rp.{" "}
                    {updatedOrderedCar.total_price.toLocaleString("id-ID")}
                  </Accordion.Header>
                  <Accordion.Body>
                    <form>
                      <h6 className="fw-bold totalHarga">Harga</h6>
                      <ul className="mt-1 mb-3">
                        <div className="d-flex justify-content-between">
                          <li className="sewa">
                            Sewa Mobil Rp. {selectedCar.price} x{" "}
                            {moment(updatedOrderedCar.finish_rent_at).diff(
                              moment(updatedOrderedCar.start_rent_at),
                              "days"
                            ) + 1}{" "}
                            hari
                          </li>
                          <h6 className="totalSewa fw-bold">
                            {" "}
                            Rp.{" "}
                            {updatedOrderedCar.total_price.toLocaleString(
                              "id-ID"
                            )}
                          </h6>
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
                        <p className="fw-bold">
                          Rp.{" "}
                          {updatedOrderedCar.total_price.toLocaleString(
                            "id-ID"
                          )}
                        </p>
                      </div>
                      <Button
                        size="md"
                        className={`w-100 ${classes.btnBayar}`}
                        disabled={!choosePayment}>
                        Bayar
                      </Button>
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

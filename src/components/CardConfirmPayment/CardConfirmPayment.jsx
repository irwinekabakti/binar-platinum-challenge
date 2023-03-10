import React, { useRef } from "react";
import { Form, Button, Tab, Tabs } from "react-bootstrap";
import classes from "./CardConfirmPayment.module.css";
import BCAIcon from "../Images/bca.svg";
import "./CardConfirmPayment.css";
import Countdown from "../Countdown/Countdown";

const CardConfirmPayment = () => {
  const infoPayment = [
    { id: 1, eventKey: "atmBca", title: "ATM BCA" },
    { id: 2, eventKey: "m-bca", title: "M-BCA" },
    { id: 3, eventKey: "bcaklik", title: "BCA Klik" },
    { id: 4, eventKey: "internetBanking", title: "Internet Banking" },
  ];

 


  return (
    <>
      <section
        id="confirm-payment"
        className={`container ${classes.cardConfirmPayment}`}>
        <div className="row justify-content-center">
          <div className="col-lg-7 g-4">
            <div className="card countTime">
              <div className="Wrapper time d-flex justify-content-between ">
                <div className="timeStamp">
                  <h6 className="fw-bold mb-3 ms-4 mt-4">
                    Selesaikan Pembayaran sebelum
                  </h6>
                  <p className="ms-4">Tangaal harinya</p>
                </div>
                <div className="counterTime my-auto me-3">
                 <Countdown timer={24 * 60 * 60 * 1000}/>
                </div>
              </div>
            </div>
            <div className="card AccountTransferBank mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Lakukan Transfer Ke</h6>
              <div className="accountBank d-flex">
                <div className="logoBank ms-4">
                  <img src={BCAIcon} alt="account bank" />
                </div>
                <div className="accountDetail ms-4">
                  <p>BCA Transfer</p>
                  <p style={{ marginTop: "-12px" }}>a.n Binar Car Rental</p>
                </div>
              </div>
              <div className="accountNumber my-2">
                <div className="number ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label
                      className={`text-secondary ${classes.labelSize}`}>
                      Nomor Rekening
                    </Form.Label>
                    <Form.Control
                      placeholder="account bank"
                      disabled
                      className={classes.formCustomBackground}
                    />
                  </Form.Group>
                </div>
                <div className="totalCost ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label
                      className={`text-secondary ${classes.labelSize}`}>
                      Total Bayar
                    </Form.Label>
                    <Form.Control
                      placeholder="account bank"
                      disabled
                      className={classes.formCustomBackground}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
            <div className="card optionPayment mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Instruksi Pembayaran</h6>
              <Tabs
                defaultActiveKey="atmBca"
                id="fill-tab-example"
                className="mb-3 mx-4"
                fill>
                {infoPayment.map((item) => (
                  <Tab
                    key={item.id}
                    eventKey={item.eventKey}
                    title={item.title}
                    className="mx-4 mb-4">
                    <li>Masukkan kartu ATM, lalu PIN</li>
                    <li>
                      Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA
                      Virtual Account”
                    </li>
                    <li>
                      Masukkan nomor BCA Virtual Account: 70020+Order ID
                      <br />
                      <span className="ms-4">Contoh:</span>
                      <br />
                      <span className="ms-4">
                        No. Peserta: 12345678, maka ditulis 7002012345678
                      </span>
                    </li>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
          <div className="col-lg-5 g-4">
            <div className="card">
              <p className="mb-3 mx-4 mt-4">
                Klik Konformasi Pembayaran untuk mempercepat proses pengecekan
              </p>
              <div className="buttonConfirm mx-4 mb-4">
                <Button size="md" className={`w-100 ${classes.btnBayar}`}>
                  Konfirmasi Pembayaran
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default CardConfirmPayment;

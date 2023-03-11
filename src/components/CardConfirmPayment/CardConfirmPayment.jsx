import React, { useEffect, useState } from "react";
import { Form, Button, Tab, Tabs, InputGroup } from "react-bootstrap";
import classes from "./CardConfirmPayment.module.css";
import BCAIcon from "../Images/bca.svg";
import BNIIcon from "../Images/bni.svg";
import MandiriIcon from "../Images/mandiri.svg";
import "./CardConfirmPayment.css";
// import moment from "moment";
import { FaCopy } from "react-icons/fa";
import { useSelector } from "react-redux";
// import Countdown from "../Countdown/Countdown";
import { useNavigate } from "react-router";

const CardConfirmPayment = () => {
  const selector = useSelector((state) => state.bankStore);
  // const selectedCar = selector.getCarData;
  const updatedOrderedCar = selector.updateCar;
  const choosePayment = selector.bankName;
  const navigate = useNavigate();

  const infoPayment = [
    { id: 1, eventKey: "atmBca", title: "ATM BCA" },
    { id: 2, eventKey: "m-bca", title: "M-BCA" },
    { id: 3, eventKey: "bcaklik", title: "BCA Klik" },
    { id: 4, eventKey: "internetBanking", title: "Internet Banking" },
  ];

  const bankChooseName = () => {
    if (choosePayment === "BCA") {
      return <p>BCA Transfer</p>;
    } else if (choosePayment === "BNI") {
      return <p>BNI Transfer</p>;
    } else if (choosePayment === "Mandiri") {
      return <p>Mandiri Transfer</p>;
    }
  };

  const getTokenPaymentCar = localStorage.getItem("start_Payment", "");

  const startPayment = new Date(getTokenPaymentCar);
  const finishPayment = new Date(startPayment);
  finishPayment.setDate(startPayment.getDate() + 1);
  const finishPaymentDate = (finishPayment) => {
    const date = new Date(finishPayment);
    return date.toLocaleString("id", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const finishPaymentHour = finishPayment.getHours();
  const finishPaymentMinute = finishPayment.getMinutes();
  const timePaymentNow = new Date();
  const diffTime = timePaymentNow.getTime() - finishPayment.getTime();
  const countdownTime = Math.abs(diffTime);
  const [time, setTime] = useState(countdownTime);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormatTime = (miliseconds) => {
    let totalSeconds = Number(Math.floor(miliseconds / 1000));
    let totalMinutes = Number(Math.floor(totalSeconds / 60));
    let totalHours = Number(Math.floor(totalMinutes / 60));

    let seconds = Number(totalSeconds % 60);
    let minutes = Number(totalMinutes % 60);
    let hours = Number(totalHours % 24);

    return `${hours} : ${minutes} : ${seconds}`;
  };

  // const setConfirmPayment = () => {
  //   localStorage.setItem("confirm_Payment", new Date().toLocaleString);
  // };

  const toUploadPayment = () => {
    // setConfirmPayment();
    navigate("/uploadPayment");
  };

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
                  <p className="ms-4">
                    {finishPaymentDate(finishPayment)} jam {finishPaymentHour} :{" "}
                    {finishPaymentMinute} WIB
                  </p>
                </div>
                <div className="counterTime my-auto me-3">
                  <div className="countDownTimer mt-2">
                    {getFormatTime(time)}
                  </div>
                </div>
              </div>
            </div>
            <div className="card AccountTransferBank mt-4">
              <h6 className="fw-bold mb-3 ms-4 mt-4">Lakukan Transfer Ke</h6>
              <div className="accountBank d-flex">
                <div className="logoBank ms-4">
                  {choosePayment === "BCA" ? (
                    <img src={BCAIcon} alt="account bank BCA" />
                  ) : null}
                  {choosePayment === "BNI" ? (
                    <img src={BNIIcon} alt="account bank BNI" />
                  ) : null}
                  {choosePayment === "Mandiri" ? (
                    <img src={MandiriIcon} alt="account Mandiri" />
                  ) : null}
                </div>
                <div className="accountDetail ms-4">
                  {bankChooseName()}
                  {/* <p>{choosePayment === "BCA" ? "BCA Transfer" : null}</p>
                  <p>{choosePayment === "BNI" ? "BNI Transfer" : null}</p>
                  <p>
                    {choosePayment === "Mandiri" ? "Mandiri Transfer" : null}
                  </p> */}
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
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="54104257877"
                        disabled
                        className={classes.formCustomBackground}
                      />{" "}
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        className="disable">
                        <FaCopy />
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </div>
                <div className="totalCost ms-4 me-4">
                  <Form.Group className="mb-3" controlId="formAccountNumber">
                    <Form.Label
                      className={`text-secondary ${classes.labelSize}`}>
                      Total Bayar
                    </Form.Label>
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder={`Rp ${updatedOrderedCar.total_price.toLocaleString(
                          "id-ID"
                        )}`}
                        disabled
                        className={`fw-bold text-dark ${classes.formCustomBackground}`}
                      />
                      <Button
                        variant="outline-secondary"
                        id="button-addon2"
                        className="disable">
                        <FaCopy />
                      </Button>
                    </InputGroup>
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
                <Button
                  size="md"
                  onClick={toUploadPayment}
                  className={`w-100 ${classes.btnBayar}`}>
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

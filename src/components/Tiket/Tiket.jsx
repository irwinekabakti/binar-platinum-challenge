import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import classes from "./Tiket.module.css";
import { useNavigate } from "react-router";
// import checklist from "../Images/centang.svg";
// import stripPayment from "../Images/strip-pembayaran.svg";
// import threeBlue from "../Images/3-blue.svg";
import ticketSuccess from "../Images/ticketSuccess.svg";
import ticketInvoice from "../Images/ticketInvoice.png";
import { useSelector } from "react-redux";

const Tiket = () => {
  const selector = useSelector((state) => state.bankStore);
  const updatedOrderedCar = selector.updateCar;
  const selectedCar = selector.getCarData;
  const choosePayment = selector.bankName;

  const orderID = updatedOrderedCar.id;
  const defaultCarID = selectedCar.id;
  // const conversionOrderID = orderID.toString() + defaultCarID.toString();

  const navigate = useNavigate();

  // const backToPayment = () => {
  //   navigate("/pembayaran");
  // };

  return (
    <div>
      {/* <div className={classes.tiketHeaderContainter}>
        <Row className={classes.eTiketHeader}>
          <Col className="col-8" id="tiketButton">
            <ul className={`me-5 ${classes.ulTiket}`}>
              <li
                className={`text-dark fw-bold ${classes.liTiket}`}
              >
                <span>
                  <AiOutlineArrowLeft className="me-2" /> Tiket
                </span>
              </li>
            </ul>
            <p className={classes.orderID}>Order ID: {orderID}</p>
          </Col>
          <Col className="col-4">
            <Row className="progressBar">
              <ul className={classes.ulProgressBar}>
                <li className={classes.liProgressBar}>
                  <img src={checklist} alt="checklist1-img" />
                </li>
                <li className={classes.liProgressBar}>
                  <p>Pilih Metode</p>
                </li>
                <li className={classes.liProgressBarStrip}>
                  <img src={stripPayment} alt="strip-img" />
                </li>
                <li className={classes.liProgressBar}>
                  <img src={checklist} alt="checklist2-img" />
                </li>
                <li className={classes.liProgressBar}>
                  <p>Bayar</p>
                </li>
                <li className={classes.liProgressBarStrip}>
                  <img src={stripPayment} alt="strip-img" />
                </li>
                <li className={classes.liProgressBar}>
                  <img src={threeBlue} alt="checklist3-img" />
                </li>
                <li className={classes.liProgressBar}>
                  <p>Tiket</p>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </div> */}
      <Container>
        <Row className={classes.eTiketBody}>
          <div className={classes.Tiket_Success}>
            <img
              src={ticketSuccess}
              className={classes.tiketSuccesImg}
              alt="tiket-success"
            />
            <h5 className={classes.tiketSuccessH5}>Pembayaran Berhasil !</h5>
            <p className={classes.tiketSuccessP}>
              Tunjukan invoice ini ke petugas BCR di titik temu.
            </p>
            <Card className={classes.tiketCard}>
              <Container>
                <Row>
                  <Col className="col-6">
                    <p className={`fw-bold ${classes.tiketCardParagraph}`}>
                      Invoice
                    </p>
                    <p className={classes.tiketCardParagraph}>*no invoice</p>
                  </Col>
                  <Col className="col-6">
                    <button
                      type="button"
                      className={`btn btn-outline-primary ${classes.btnEtiket}`}>
                      <FiDownload />
                      Unduh
                    </button>
                  </Col>
                </Row>
                <Row>
                  <img src={ticketInvoice} alt="tiket-invoice" />
                </Row>
              </Container>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Tiket;

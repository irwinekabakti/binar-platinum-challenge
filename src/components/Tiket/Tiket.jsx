import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import classes from "./Tiket.module.css";
import { useNavigate } from "react-router";

const Tiket = () => {
  const navigate = useNavigate();
  const backToPayment = () => {
    navigate("/pembayaran");
  };

  return (
    <div>
      <div className={classes.tiketHeaderContainter}>
        <Row className={classes.eTiketHeader}>
          <Col className="col-8" id="tiketButton">
            <ul className={`me-5 ${classes.ulTiket}`}>
              <li
                className={`text-dark fw-bold ${classes.liTiket}`}
                onClick={backToPayment}>
                <span>
                  <AiOutlineArrowLeft className="me-2" /> Tiket
                </span>
              </li>
              {/* <li className={classes.liTiket}>
                <p className={classes.paragraphTiket}>Tiket</p>
              </li> */}
            </ul>
            <p className={classes.orderID}>Order ID: xxxx</p>
          </Col>
          <Col className="col-4">
            <Row className="progressBar">
              <ul className={classes.ulProgressBar}>
                <li className={classes.liProgressBar}>
                  <img
                    src="assets\images\png\Tiket_checklist.png"
                    alt="checklist1-img"
                  />
                </li>
                <li className={classes.liProgressBar}>
                  <p>Pilih Metode</p>
                </li>
                <li className={classes.liProgressBarStrip}>
                  <img
                    src="assets\images\png\Tiket_strip.png"
                    alt="strip-img"
                  />
                </li>
                <li className={classes.liProgressBar}>
                  <img
                    src="assets\images\png\Tiket_checklist.png"
                    alt="checklist2-img"
                  />
                </li>
                <li className={classes.liProgressBar}>
                  <p>Bayar</p>
                </li>
                <li className={classes.liProgressBarStrip}>
                  <img
                    src="assets\images\png\Tiket_strip.png"
                    alt="strip-img"
                  />
                </li>
                <li className={classes.liProgressBar}>
                  <img
                    src="assets\images\png\Tiket_checklist.png"
                    alt="checklist3-img"
                  />
                </li>
                <li className={classes.liProgressBar}>
                  <p>Tiket</p>
                </li>
              </ul>
            </Row>
          </Col>
        </Row>
      </div>
      <Container>
        <Row className={classes.eTiketBody}>
          <div className={classes.Tiket_Success}>
            <img
              src="assets\images\png\Tiket_Success.png"
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
                  <img
                    src="assets\images\png\Tiket_Invoice.png"
                    alt="tiket-invoice"
                  />
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

import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import classes from "./Tiket.module.css";
// import { useNavigate } from "react-router";
import ticketSuccess from "../Images/ticketSuccess.svg";
import ticketInvoice from "../Images/ticketInvoice.png";
import { useDispatch, useSelector } from "react-redux";

const Tiket = () => {
  const selector = useSelector((state) => state.bankStore);
  const updatedOrderedCar = selector.updateCar;
  const getSlip = updatedOrderedCar.slip;

  const getToken = localStorage.getItem("token");

  return (
    <div>
      <Container>
        {/* {getToken ? ( */}
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
                    <a href={getSlip}>
                      <button
                        type="button"
                        className={`btn btn-outline-primary ${classes.btnEtiket}`}>
                        <FiDownload />
                        Unduh
                      </button>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <img src={ticketInvoice} alt="tiket-invoice" />
                </Row>
              </Container>
            </Card>
          </div>
        </Row>
        {/* ) : null} */}
      </Container>
    </div>
  );
};

export default Tiket;

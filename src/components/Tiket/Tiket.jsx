import React, { useState } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import classes from "./Tiket.module.css";
// import { useNavigate } from "react-router";
import ticketSuccess from "../Images/ticketSuccess.svg";
import ticketInvoice from "../Images/ticketInvoice.png";
import ContohTiket from "../Images/contoh-tiket.webp";
import { useDispatch, useSelector } from "react-redux";
// import { Document, Page } from "react-pdf";

const Tiket = () => {
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);
  const selector = useSelector((state) => state.bankStore);
  const updatedOrderedCar = selector.updateCar;
  const getSlip = updatedOrderedCar.slip;

  /*
  const onDocumentLoadedSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  */

  return (
    <div>
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
                    <a href={ContohTiket} download>
                      {/* <Document
                        file={getSlip}
                        onLoadSuccess={onDocumentLoadedSuccess}>
                        <Page pageNumber={pageNumber}></Page>
                      </Document> */}
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
      </Container>
    </div>
  );
};

export default Tiket;

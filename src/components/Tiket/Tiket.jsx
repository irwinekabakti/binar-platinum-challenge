import React, { Fragment } from "react";
import { Row, Col, Container, Card } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import classes from "./Tiket.module.css";
import ticketSuccess from "../Images/ticketSuccess.svg";
import TiketPdf from "../Images/binarTiket.pdf";
import { Viewer, Worker } from "@react-pdf-viewer/core";

const Tiket = () => {
  return (
    <Fragment>
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
                  <Col className="col-6 mt-3" data-testid="wrapper-Card">
                    <p
                      className={`fw-bold ${classes.tiketCardParagraph}`}
                      data-testid="tiket-Invoice">
                      Invoice
                    </p>
                    <p
                      className={classes.tiketCardParagraph}
                      data-testid="tiket-NoInvoice">
                      *no invoice
                    </p>
                  </Col>
                  <Col className="col-6 mt-3">
                    <a href={TiketPdf} download>
                      <button
                        type="button"
                        className={`btn btn-outline-primary mt-3 ${classes.btnEtiket}`}>
                        <FiDownload />
                        Unduh
                      </button>
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
                    <div style={{ height: "500px" }}>
                      <Viewer fileUrl={TiketPdf} />
                    </div>
                  </Worker>
                </Row>
              </Container>
            </Card>
          </div>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Tiket;

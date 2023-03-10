import React from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./CardConfirmPayment.module.css";
import BCAIcon from "../Images/bca.svg";

const CardConfirmPayment = () => {
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
                  <h3>Hitung Mundur</h3>
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
            <div className="container confirmPayment d-flex flex-column">
              <div className="card instruction-container d-flex flex-column mt-4 p-3">
                <div className="d-flex flex-column p-0">
                  <p className="fw-bold" style={{ fontSize: "14px" }}>
                    Instruksi Pembayaran
                  </p>
                </div>
                <div class="tabs w-100">
                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab1"
                  />
                  <label for="tab1" class="tabs__label">
                    {/* ATM {stateGlobal.BankTransfer} */}
                  </label>
                  <div class="tabs__content m-3 mb-0">
                    <li>Masukkan kartu ATM, lalu PIN</li>
                    <li>
                      {/* Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek{" "}
                      {stateGlobal.BankTransfer} Virtual Account” */}
                    </li>
                    <li>
                      {/* Masukkan nomor {stateGlobal.BankTransfer} Virtual Account:
                      70020+Order ID */}
                    </li>
                    <p
                      className="mb-0"
                      style={{ marginLeft: "19px", color: "#8A8A8A" }}>
                      Contoh
                    </p>
                    <p
                      className="mb-0"
                      style={{ marginLeft: "19px", color: "#8A8A8A" }}>
                      No. Peserta: 12345678, maka ditulis 7002012345678
                    </p>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </div>
                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab2"
                  />
                  <label for="tab2" class="tabs__label">
                    {/* disini logic */}
                  </label>
                  <div class="tabs__content m-3 mb-0">
                    <li>Buka Aplikasi, lalu PIN</li>
                    <li>
                      Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek{" "}
                      {/* // disini logic Virtual Account” */}
                    </li>
                    <li>
                      {/* Masukkan nomor // disini logic Virtual Account: */}
                      70020+Order ID
                    </li>
                    <p
                      className="mb-0"
                      style={{ marginLeft: "19px", color: "#8A8A8A" }}>
                      Contoh
                    </p>
                    <p
                      className="mb-0"
                      style={{ marginLeft: "19px", color: "#8A8A8A" }}>
                      No. Peserta: 12345678, maka ditulis 7002012345678
                    </p>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </div>
                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab3"
                  />
                  <label for="tab3" class="tabs__label">
                    {/* // disni logic Klik */}
                  </label>
                  <div class="tabs__content">{/* // disini logic Klik */}</div>
                  <input
                    type="radio"
                    class="tabs__radio"
                    name="tabs-example"
                    id="tab4"
                  />
                  <label for="tab4" class="tabs__label">
                    Internet Banking
                  </label>
                  <div class="tabs__content">Internet Banking</div>
                </div>
              </div>
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

import React from "react";
import axios from "axios";
import LeftNarrow from "../assets/fi_arrow-left.png";
import "./Payment.css";
import ProgresPembayaran from "../assets/frame-pembayaran.png";
import bca_image from "../assets/bca.png";
import bni_image from "../assets/bni.png";
import mandiri_image from "../assets/mandiri.png";
import {
  BsFillCaretDownFill,
  BsFillCaretUpFill,
  BsCheckLg,
} from "react-icons/bs";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Payment = () => {
  let subMenu = document.getElementById("subMenu");
  const [state, setState] = useState(false);
  const [orders, setOrders] = useState([]);
  const [bankBCA, setbankBCA] = useState(true);
  const [bankBNI, setbankBNI] = useState(true);
  const [bankMandiri, setbankMandiri] = useState(true);
  const dispatch = useDispatch();

  const toggle = () => {
    setState(!state);
    subMenu.classList.toggle("open-menu");
  };

  const changeDataBank = (bankType) => {
    document.getElementById("buttonBank").disabled = false;
    if (bankType === "BCA") {
      setbankBCA(!bankBCA);
      dispatch({ type: bankType });
      document.getElementById("buttonBank").pointerEvents = true;
    }
    if (bankType === "BNI") {
      setbankBNI(!bankBNI);
      dispatch({ type: bankType });
    }
    if (bankType === "MANDIRI") {
      setbankMandiri(!bankMandiri);
      dispatch({ type: bankType });
    }
  };

  const getOrders = async () => {
    try {
      const response = await axios.get(
        `https://bootcamp-rent-cars.herokuapp.com/customer/order/${stateGlobal.updateCarDate.id}`,
        {
          headers: {
            access_token: localStorage.getItem("cliAcCsTKn"),
          },
        }
      );
      const order = response.data;
      setOrders(order);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  const setPaymentTime = () => {
    localStorage.setItem("StartPayment", new Date().toLocaleString());
  };

  const stateGlobal = useSelector((state) => state);

  let startRent = stateGlobal.updateCarDate.start_rent_at;
  const getStartRent = (startRent) => {
    const date = new Date(startRent);
    return date.toLocaleString("id", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  let finishRent = stateGlobal.updateCarDate.finish_rent_at;
  const getFinishRent = (finishRent) => {
    const date = new Date(finishRent);
    return date.toLocaleString("id", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const diffTime = Math.abs(new Date(finishRent) - new Date(startRent));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) + 1);

  return (
    <>
      <div className="container-pembayaran mb-0">
        <div
          className="d-flex justify-content-center"
          style={{ height: "220px", backgroundColor: "#F1F3FF" }}>
          <div
            className="d-flex flex-row h-75 justify-content-between"
            style={{ width: "75%", height: "124px" }}>
            <div
              className="d-flex align-items-center h-100"
              style={{ height: "30px" }}>
              <img
                src={LeftNarrow}
                className="btn btn-link img-leftnarrow p-0 me-3"
                alt="leftnarrow"
              />
              <p className="fw-bold mt-3">Pembayaran</p>
            </div>
            <div className="d-flex align-items-center h-100">
              <img src={ProgresPembayaran} alt="frameprogress" />
            </div>
          </div>
        </div>
        <div
          className="container-form-detail w-100 d-flex align-items-center justify-content-center position-absolute"
          style={{ top: "204px" }}>
          <div
            className="form-detail-pesanan row justify-content-center"
            style={{ width: "75%", padding: "24px" }}>
            <p className="title-form fw-bold mb-2">Detail Pesananmu</p>
            <div className="d-flex flex-row">
              <div className="col-3 d-flex flex-column">
                <p className="title-form-pesanan mb-2">Nama/Tipe Mobil</p>
                <p className="mb-0" style={{ color: "#8A8A8A" }}>
                  {stateGlobal.updateGetsCarData.name}
                </p>
              </div>
              <div className="col-3 d-flex flex-column">
                <p className="title-form-pesanan mb-2">Kategori</p>
                <p className="mb-0" id="tanggal" style={{ color: "#8A8A8A" }}>
                  {stateGlobal.updateGetsCarData.category === "small"
                    ? "4-5 Orang"
                    : stateGlobal.updateGetsCarData.category === "medium"
                    ? "6-8 Orang"
                    : "8-10 Orang"}
                </p>
              </div>
              <div className="col-3 d-flex flex-column">
                <p className="title-form-pesanan mb-2">Tanggal Mulai Sewa</p>
                <p className="mb-0" style={{ color: "#8A8A8A" }}>
                  {getStartRent(startRent)}
                </p>
              </div>
              <div className="col-3 d-flex flex-column">
                <p className="title-form-pesanan mb-2">Tanggal Akhir Sewa</p>
                <p className="mb-0" style={{ color: "#8A8A8A" }}>
                  {getFinishRent(finishRent)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-transferpembayaran d-flex w-100 justify-content-center"
        style={{ top: "10px", marginTop: "6rem", marginBottom: "20rem" }}>
        <div className="d-flex flex-row" style={{ width: "75%" }}>
          <div
            className="container-transfer d-flex flex-row justify-content-start p-0 me-4"
            style={{ width: "62%" }}>
            <div className="container-pilih-bank d-flex flex-column p-4 w-100">
              <p className="mb-2 fw-bold">Pilih Bank Transfer</p>
              <p className="mb-4" style={{ fontSize: "14px" }}>
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </p>
              <div className="input-container mb-4 d-flex flex-row justify-content-between">
                <input
                  className="input"
                  id="bca"
                  type="radio"
                  name="radio"
                  onChange={() => changeDataBank("BCA")}
                />
                <span className="icon_check order-last">
                  <BsCheckLg />
                </span>
                <div className="radio-tile order-first">
                  <img className="me-3" src={bca_image} alt="bca_image" />
                  <label htmlFor="bca">BCA Transfer</label>
                </div>
              </div>
              <div className="input-container mb-4 d-flex flex-row justify-content-between">
                <input
                  className="input"
                  id="bni"
                  type="radio"
                  name="radio"
                  onChange={() => changeDataBank("BNI")}
                />
                <span className="icon_check order-last">
                  <BsCheckLg />
                </span>
                <div className="radio-tile order-first">
                  <img className="me-3" src={bni_image} alt="bni_image" />
                  <label htmlFor="bni">BNI Transfer</label>
                </div>
              </div>
              <div className="input-container d-flex flex-row justify-content-between">
                <input
                  className="input"
                  id="mandiri"
                  type="radio"
                  name="radio"
                  onChange={() => changeDataBank("MANDIRI")}
                />
                <span className="icon_check order-last">
                  <BsCheckLg />
                </span>
                <div className="radio-tile order-first">
                  <img
                    className="me-3"
                    src={mandiri_image}
                    alt="mandiri_image"
                  />
                  <label htmlFor="mandiri">Mandiri Transfer</label>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container-detailpembayaran d-flex flex-column p-4"
            style={{ width: "38%", fontSize: "14px" }}>
            <div>
              <p className="mb-2 fw-bold">
                {stateGlobal.updateGetsCarData.name}
              </p>
              <p className="mb-2">
                {stateGlobal.updateGetsCarData.category === "small"
                  ? "4-5 Orang"
                  : stateGlobal.updateGetsCarData.category === "medium"
                  ? "6-8 Orang"
                  : "9-10 Orang"}
              </p>
            </div>
            <div className="total-pembayaran d-flex flex-row justify-content-between align-items-center">
              <div className="d-flex flex-row">
                <p className="me-4">Total</p>
                <button onClick={toggle} className="dropdown-button">
                  {state ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                </button>
              </div>
              <div className="d-flex flex-row">
                <p className="fw-bold">Rp {orders.total_price}</p>
              </div>
            </div>

            <div className="sub-menu-wrap" id="subMenu">
              <div className="mb-1 fw-bold">Harga</div>
              <div className="d-flex flex-row justify-content-between">
                <li className="ms-1 mb-3">
                  Sewa Mobil Rp {stateGlobal.updateGetsCarData.price} x{" "}
                  {diffDays} hari
                </li>
                <p>Rp {orders.total_price}</p>
              </div>
              <p className="mb-1 fw-bold">Biaya Lainnya</p>
              <div className="d-flex flex-row justify-content-between">
                <li className="ms-1">Pajak</li>
                <p className=" mb-1" style={{ color: "#5CB85F" }}>
                  Termasuk
                </p>
              </div>
              <div className="d-flex flex-row justify-content-between">
                <li className="ms-1 mb-3">Biaya Makan Sopir</li>
                <p style={{ color: "#5CB85F" }}>Termasuk</p>
              </div>
              <p className="mb-1 fw-bold">Belum Termasuk</p>
              <li className="ms-1 mb-1">Bensin</li>
              <li className="ms-1 mb-3">Tol dan Parkir</li>
            </div>
            <div className="d-flex flex-row justify-content-between">
              <p className="mt-3 fw-bold">Total</p>
              <p className="mt-3 mb-4 fw-bold" data-testid="totalPrice">
                Rp {orders.total_price}
              </p>
            </div>
            <Link
              className="button-bayar btn btn-success mb-2 fw-bold d-flex justify-content-center"
              id="buttonBank"
              data-testid="paymentButton"
              to={"/cars/paymentconfirm"}
              onClick={setPaymentTime}
              disabled>
              Bayar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;

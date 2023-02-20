import React from "react";
import classes from "./Empty.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const Empty2 = () => {
  const navigate = useNavigate();

  const toDetail = () => {
    navigate("/detailCar/:id");
  };

  return (
    <section className={classes.emptySection} id="empty-section">
      <div className="container">
        <div className={`d-flex justify-content-around ${classes.miniPhone}`}>
          <div className={`col-lg col-md col-sm ${classes.marginEmpty}`}>
            {/* <a href="/detailCar/:id" className="text-decoration-none text-dark"> */}
            <span className="backToDetail" onClick={toDetail}>
              <FaArrowLeft className="me-3" />
              Pembayaran
            </span>
            {/* </a> */}
          </div>
          <div
            className={`col-lg col-md col-sm ${classes.marginEmpty} ${classes.marginBox2}`}>
            <p className="stepBayar">1 pilih metode -- 2 Bayar -- 3 Tiket</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empty2;

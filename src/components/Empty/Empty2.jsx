import React from "react";
import classes from "./Empty.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import totalStep1 from "../Images/totalStep1.svg";

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
            <span
              className={`backToDetail ${classes.backToDetail}`}
              onClick={toDetail}>
              <FaArrowLeft className="me-3" />
              Pembayaran
            </span>
          </div>
          <div
            className={`col-lg col-md col-sm ${classes.marginEmpty} ${classes.marginBox2}`}>
            <img src={totalStep1} alt="step-1" className="ms-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empty2;

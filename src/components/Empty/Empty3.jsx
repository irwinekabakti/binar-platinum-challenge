import React from "react";
import classes from "./Empty.module.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import totalStep2 from "../Images/totalStep2.svg";
import { useSelector } from "react-redux";

const Empty3 = () => {
  const navigate = useNavigate();
  const selector = useSelector((state) => state.bankStore);
  const updatedOrderedCar = selector.updateCar;

  const toDetail = () => {
    navigate(`/payment/${updatedOrderedCar.id}`);
  };

  return (
    <section className={classes.emptySection} id="empty-section">
      <div className="container">
        <div className={classes.contentStep}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className={`d-flex justify-content-center w-50 ${classes.spaceStepMain}`}>
              <span
                className={`d-flex ${classes.spanToDetail}`}
                onClick={toDetail}>
                <FaArrowLeft className="my-auto me-3" />
                <p className="my-auto">Pembayaran</p>
              </span>
            </div>
            <div className={`d-flex justify-content-center ms-5 mt-2 w-50`}>
              <p>Order ID : disni order id </p>
              {/* <p>Order ID : {updatedOrderedCar.id} </p> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                src={totalStep2}
                alt="step-1"
                className={classes.spaceStepSecond}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Empty3;

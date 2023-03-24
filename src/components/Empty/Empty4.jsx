import React from "react";
import classes from "./Empty.module.css";
import { FaArrowLeft } from "react-icons/fa";
// import { useNavigate } from "react-router";
import totalStep3 from "../Images/totalStep3.svg";
import { useSelector } from "react-redux";

const Empty4 = () => {
  // const navigate = useNavigate();
  const selector = useSelector((state) => state.bankStore);
  const updatedOrderedCar = selector.updateCar;
  const selectedCar = selector.getCarData;

  const orderID = updatedOrderedCar.id;
  const defaultCarID = selectedCar.id;

  // const conversionOrderID = orderID.toString() + defaultCarID.toString();

  // const toUploadPayment = () => {
  //   navigate(`/payment/${selectedCar.id}`);
  // };

  return (
    <section className={classes.emptySection3} id="empty-section">
      <div className="container">
        <div className={classes.contentStep}>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className={`d-flex justify-content-center w-50 ${classes.spaceStepMain}`}>
              <span
                className={`d-flex ${classes.spanToDetail}`}
                // onClick={toUploadPayment}
              >
                <FaArrowLeft className="me-3 mt-1" />
                Tiket
              </span>
            </div>
            <div
              className={`d-flex justify-content-center ms-2 w-50`}
              style={{ marginTop: "-15px" }}
              data-testid="content-order">
              <p className="mt-3" data-testid="order-test">
                Order ID : {orderID.toString() + defaultCarID.toString()}{" "}
                {/* Order ID : {orderID}{" "} */}
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <img
                src={totalStep3}
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

export default Empty4;

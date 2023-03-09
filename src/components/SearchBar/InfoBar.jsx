import React, { Fragment } from "react";
import classes from "./SearchBar.module.css";
// import { useDispatch } from "react-redux";
// import { useParams } from "react-router";
import { useSelector } from "react-redux";
// import {
//   bankPayment,
//   getOrderCar,
//   updateCar,
// } from "../../store/action/bank-slice";
import moment from "moment";

const InfoBar = () => {
  // const dispatch = useDispatch();
  // const carId = useParams();

  const selector = useSelector((state) => state.bankStore);
  const selectedCar = selector.getCarData;
  const updatedOrderedCar = selector.updateCar;

  // const defaultInfoCar = () => {
  //   try {
  //     dispatch(bankPayment(carId.id));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getUpdateCar = () => {
  //   console.log(carId);
  //   try {
  //     dispatch(updateCar(carId.id));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   // defaultInfoCar();
  //   // getUpdateCar();
  // }, []);

  return (
    <Fragment>
      <section id="searchBar" className={`searchBar ${classes.main}`}>
        <div className="container mt-1 d-flex justify-content-center">
          <div className={`card p-4 ${classes.cardBar}`}>
            <div className="row">
              <p className="fs-6 fw-bold" style={{ marginTop: "-20px" }}>
                Detail Pesananmu
              </p>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.labelCar}`}
                  htmlFor="carName">
                  Nama Mobil
                </label>
                <p className={`p-1 ${classes.sizeTag}`}>{selectedCar.name}</p>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label
                  className={`fw-bold ${classes.label}`}
                  htmlFor="category">
                  Kategori
                </label>
                <p className={`p-1 ${classes.sizeTag}`}>
                  {selectedCar.category === "small" ? "2 - 4 orang" : null}
                  {selectedCar.category === "medium" ? "4 - 6 orang" : null}
                  {selectedCar.category === "large" ? "6 - 8 orang" : null}
                </p>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="price">
                  Tanggal Mulai Sewa
                </label>
                <p className={`p-1 ${classes.sizeTag}`}>
                  {moment(updatedOrderedCar.start_rent_at).format("YYYY-MM-DD")}
                </p>
              </div>
              <div className="col-lg-3 d-flex flex-column justify-content-between">
                <label className={`fw-bold ${classes.label}`} htmlFor="status">
                  Tanggal Akhir Sewa
                </label>
                <p className={`p-1 ${classes.sizeTag}`}>
                  {moment(updatedOrderedCar.finish_rent_at).format(
                    "YYYY-MM-DD"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default InfoBar;

import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Button } from "react-bootstrap";
import Loading from "../Loading/Loading";
import BASE_API from "../../api/BASE_API";
import classes from "./CardDetail.module.css";
import { text_Include, text_Exclude, text_Details } from "./data";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { bankPayment } from "../../store/action/bank-slice";
import { useSelector } from "react-redux";

const CardDetail = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState();
  const carId = useParams();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const isDatePicked = "";
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.bankStore);
  const selectedCar = selector.getCarData;
  const [rentDay, setRentDay] = useState("");
  const years = [2022, 2023, 2024];

  useEffect(() => {
    let day = 0;
    let startingDate = new Date(startDate).getDate();
    let endingDate = new Date(endDate).getDate();
    let bookingMonth = new Date(startDate).getMonth();

    if (startDate && endDate) {
      day = endingDate - startingDate;
      console.log(day);
      if (day < 0) {
        if (bookingMonth % 2 === 1) {
          day += 31;
        } else {
          if (bookingMonth !== 2) {
            day += 30;
          } else {
            day += 28;
          }
        }
      }
      setRentDay(day + 1);
    } else {
      setRentDay(0);
    }
  }, [startDate, endDate]);
  // console.log(startDate);
  // console.log(endDate);

  // console.log(dateRange[0]);
  // console.log(dateRange[1]);

  // console.log(selectedCar)

  // const BASE_URL_ID = `${BASE_API}/customer/car/${carId.id}`;

  const cardCarDetail = async () => {
    // console.log(car);
    try {
      setLoading(true);
      dispatch(bankPayment(carId.id));
      // console.log(setCar);
    } catch (error) {
      // console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    cardCarDetail();
    setDateRange(dateRange);
  }, []);

  // let rentDays= Math.ceil()

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : selectedCar ? (
        <section id="card-detail" className={`container ${classes.cardDetail}`}>
          <div className="row justify-content-center">
            <div className="col-lg-7 g-4">
              <div className="card">
                <h6 className="fw-bold mb-3 ms-4 mt-4">Tentang paket</h6>
                <h6 className="fw-bold ms-4 mt-4">
                  Include
                  <ul className="mb-2 mt-3">
                    {text_Include.map((item) => (
                      <li
                        className="mb-4"
                        id={`include-${item.id}`}
                        key={item.id}>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </h6>
                <h6 className="fw-bold ms-4 mt-4">
                  Exclude
                  <ul className="mb-2 mt-3">
                    {text_Exclude.map((item) => (
                      <li
                        className="mb-4"
                        id={`exclude-${item.id}`}
                        key={item.id}>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </h6>
                <h6 className="fw-bold ms-4 mt-4">
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className="accordion-button collapsed fw-bold"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne">
                          Refund, Reschedule, Overtime
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                          <ul className="mb-2 mt-3">
                            {text_Details.map((item) => (
                              <li
                                className="mb-4"
                                id={`detail-${item.id}`}
                                key={item.id}>
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </h6>
              </div>
            </div>
            <div className="col-lg-5 g-4">
              <div className="card">
                <div className={`col-lg ${classes.wrapperImage}`}>
                  {selectedCar.image ? (
                    <div className="align-self-center mt-4">
                      <img
                        src={selectedCar.image}
                        className="card-img rounded-1"
                        alt={`car-images-${selectedCar.id}`}
                      />
                    </div>
                  ) : (
                    <h3 className="justify-content-center d-flex">
                      Image Not found !
                    </h3>
                  )}
                </div>
                <div className="card-body mt-2 mb-2">
                  <h6 className="fw-bold">{selectedCar.name}</h6>
                  {selectedCar.category ? (
                    <i className="bi bi-people">
                      <span className="fw-bold ms-2">
                        {selectedCar.category === "small" ? "2-4 orang" : null}
                        {selectedCar.category === "medium" ? "4-6 orang" : null}
                        {selectedCar.category === "large" ? "6-8 orang" : null}
                      </span>
                    </i>
                  ) : (
                    <h3 className="justify-content-start d-flex">
                      Category Error !
                    </h3>
                  )}
                </div>
                <div className="card-body mt-2 mb-2">
                  <h6>Tentukan lama sewa mobil (max. 7 hari)</h6>
                  <DatePicker
                    dateFormat="dd MMM yyyy"
                    selectsRange={true}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    minDate={startDate ? new Date(startDate) : new Date()}
                    maxDate={
                      startDate
                        ? new Date(
                            new Date(startDate).setDate(
                              new Date(startDate).getDate() + 6
                            )
                          )
                        : null
                    }
                    isClearable={true}
                    placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                    className="w-100"
                    // maxDate={addDays(new Date(), 5)}
                  ></DatePicker>
                </div>

                {selectedCar.price ? (
                  <div className="card-body d-flex justify-content-between">
                    <p className="fw-bold text-uppercase">Total :&nbsp;</p>
                    <p id="totalPrice" className="fw-bold totalPrice">
                      Rp {(selectedCar.price * rentDay).toLocaleString("id-ID")}
                    </p>
                  </div>
                ) : (
                  <h3 className="justify-content-center">Price Error !</h3>
                )}
                <div className="card-body mt-2 mb-2">
                  <Button
                    variant="success"
                    className={`${classes.buttonToPayment} fw-bold w-100 py-2`}
                    disabled={rentDay > 0 ? false : true}>
                    Lanjutkan ke Pembayaran
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h3 className="justify-content-center d-flex">Mobil Tidak Ditemukan</h3>
      )}
    </Fragment>
  );
};

export default CardDetail;

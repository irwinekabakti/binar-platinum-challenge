import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "react-bootstrap";
import Loading from "../Loading/Loading";
import classes from "./CardDetail.module.css";
import { text_Include, text_Exclude, text_Details } from "./data";
import DatePicker from "react-datepicker";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { bankPayment, createOrder } from "../../store/action/bank-slice";

const CardDetail = () => {
  const [loading, setLoading] = useState();
  const carId = useParams();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.bankStore);
  const selectedCar = selector.getCarData;
  const [rentDay, setRentDay] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let day = 0;

    if (startDate && endDate) {
      day = moment(endDate).diff(moment(startDate), "days") + 1;
      setRentDay(day);
    } else {
      setRentDay(0);
    }
  }, [startDate, endDate]);

  // const totalPrice = selectedCar.price * rentDay;

  const cardCarDetail = async () => {
    try {
      setLoading(true);
      dispatch(bankPayment(carId.id));
    } catch (error) {
      // console.log(error);
      alert(error);
    }
    setLoading(false);
  };

  const setTokenPaymentCar = () => {
    localStorage.setItem("start_Payment", new Date().toLocaleString());
  };

  const createOrderCar = async () => {
    try {
      dispatch(
        createOrder({
          start_rent_at: moment(dateRange[0]).format("YYYY-MM-DD"),
          finish_rent_at: moment(dateRange[1]).format("YYYY-MM-DD"),
          car_id: Number(carId.id),
        })
      )
        .unwrap()
        .then(() => {
          setTokenPaymentCar();
          navigate(`/payment/${selectedCar.id}`);
        });
    } catch (error) {
      // console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    cardCarDetail();
    setDateRange(dateRange);
  }, []);

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
                    <div className="carInfo">
                      <i className="bi bi-people"></i>
                      <span className="text-secondary ms-2">
                        <small>
                          {selectedCar.category.toLowerCase() === "small"
                            ? "2 - 4 orang"
                            : null}
                          {selectedCar.category.toLowerCase() === "medium"
                            ? "4 - 6 orang"
                            : null}
                          {selectedCar.category.toLowerCase() === "large"
                            ? "6 - 8 orang"
                            : null}
                        </small>
                      </span>
                    </div>
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
                    showIcon
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
                    isClearable
                    placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                    className="w-100 red-border"
                  />
                </div>

                {selectedCar.price ? (
                  <div className="card-body d-flex justify-content-between">
                    <p className="fw-bold text-uppercase">Total :&nbsp;</p>
                    <p id="totalPrice" className="fw-bold totalPrice">
                      Rp {(selectedCar.price * rentDay).toLocaleString("id-ID")}
                      {/* Rp {totalPrice.toLocaleString("id-ID")} */}
                    </p>
                  </div>
                ) : (
                  <h3 className="justify-content-center">Price Error !</h3>
                )}
                <div className="card-body mt-2 mb-2">
                  <Button
                    variant="success"
                    onClick={createOrderCar}
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

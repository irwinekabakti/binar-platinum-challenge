import React, { Fragment, useEffect, useState } from "react";
import classes from "./CardCar.module.css";
import Loading from "../Loading/Loading";
import axios from "axios";
import BASE_API from "../../api/BASE_API";

const CardCar = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState();
  const BASE_URL = `${BASE_API}/admin/v2/car`;

  const handlerFilterCar = async () => {
    try {
      setLoading(true);
      const config = {
        headers: {
          access_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY3NTUxNjE1MH0.GWyuCrZVA5HuA3ODVAvgXj5GxoP82BnkUM_rJSuMi5A",
        },
      };
      const { data } = await axios.get(BASE_URL, config);

      setCars(data.cars);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    console.log("run");
    // setCars(cars);
    handlerFilterCar();
  }, []);

  return (
    <Fragment>
      <section id="card-car" className={`container ${classes.containerBottom}`}>
        {loading ? (
          <Loading />
        ) : (
          <div className="row justify-content-evenly">
            {cars.length &&
              cars.map((item) => (
                <div className="col-lg-4 col-md-6 col-sm-12 g-4" key={item.id}>
                  <div className={`card ${classes.cardBox}`}>
                    <div className="align-self-center w-75 mt-5 mb-3">
                      <img
                        src={item.image}
                        className="card-img rounded-1"
                        alt={`images-${item.id}`}
                      />
                    </div>
                    <div className="card-body align-self-center mt-2 mb-2">
                      <h5 className="card-title ">{item.name}</h5>
                      <h5 className="card-title fw-bold">
                        Rp. {item.price}/Hari
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a
                        className="text-decoration-none"
                        href={`/detailCar/${item.id}`}>
                        <button className={`w-100 ${classes.btnCard}`}>
                          Pilih Mobil
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default CardCar;

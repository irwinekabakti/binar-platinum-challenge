import React, { Fragment } from "react";
import classes from "./WhyUs.module.css";
import data_Card from "./data";
// import iconComplete from "../Images/icon_complete.svg";

const WhyUs = () => {
  return (
    <Fragment>
      <section className="whyUs mt-5" id="WhyUs">
        <div className="container">
          <div className={classes.whyHeader}>
            <h2 className={classes.h2Title} data-testid="title-WhyUs">
              Why Us?
            </h2>
            <p className="fw-bold">Mengapa harus pilih Binar Car Rental ?</p>
          </div>
          <div className="row g-4 why-body">
            {data_Card.map((data) => (
              <div className="col-lg-3 col-md-6 col-12" key={data.id}>
                <div className={`card ${classes.cardWhyUs}`}>
                  <div className="card-body">
                    <img
                      src={data.img}
                      alt={data.alt_Img}
                      className="img-fluid mb-3"
                    />
                    <h5
                      className={`card-title fw-bold ${classes.cardTitleWhyUs}`}>
                      {data.title}
                    </h5>
                    <p
                      className={`card-text fw-bold mt-3 ${classes.cardTextWhyUs}`}>
                      {data.paragraph}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default WhyUs;

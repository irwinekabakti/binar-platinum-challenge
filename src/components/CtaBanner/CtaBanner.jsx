import React, { Fragment } from "react";
import classes from "./CtaBanner.module.css";

const CtaBanner = () => {
  return (
    <Fragment>
      <section className={classes.CtaBanner} id="cta-banner">
        <div className="container">
          <div className={`text-center ${classes.cardBanner}`}>
            <div className="card-body" data-testid="content-CTABanner">
              <h1
                className={`card-title justify-content-center align-self-center ${classes.cardTitleBanner}`}
                data-testid="title-CTABanner">
                Sewa Mobil di (Lokasimu) Sekarang
              </h1>
              <p
                className={`fw-bold card-text ${classes.cardParagraph}`}
                data-testid="description-CTABanner">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
                <br></br>
                tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              <a
                href="/SearchCars"
                className={`justify-content-center text-white fw-bold  ${classes.navItemBtn}`}>
                Mulai Sewa Mobil
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CtaBanner;

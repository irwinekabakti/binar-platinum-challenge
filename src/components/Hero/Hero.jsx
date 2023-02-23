import React, { Fragment } from "react";
import classes from "./Hero.module.css";
import car from "../Images/img_car.svg";

const Hero = (props) => {
  const { isButtonShow } = props;

  return (
    <Fragment>
      <section className={classes.heroSection} id="hero-section">
        <div className={`${classes.heroFlex} ${classes.heroContent} mt-4`}>
          <div className="hero-title mt-4">
            <h1 className={classes.heroContentH1}>
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className={`mt-3 ${classes.heroContentP}`}>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {isButtonShow && (
              <div className="hero-button mt-4">
                <a
                  href="/searchCars"
                  className={`text-white fw-bold justify-content-center ${classes.navItemBtn}`}>
                  Mulai Sewa Mobil
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={`${classes.heroFlex} ${classes.heroImage}`}>
          <img src={car} alt="img-car" width="100%" height="auto" />
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;

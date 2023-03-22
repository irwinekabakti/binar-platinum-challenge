import React, { Fragment } from "react";
import classes from "./OurService.module.css";
import check_Services from "./data";
import img_Service from "../Images/img_service.svg";
import img_Check from "../Images/fi_check.svg";

const OurService = () => {
  return (
    <Fragment>
      <section className={classes.ourServices} id="our-services">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg col-md-12">
              <img
                src={img_Service}
                alt="illustration-services"
                className={`img-fluid ${classes.illustrationServices}`}
              />
            </div>
            <div className="col-12 col-lg col-md-12">
              <div className={classes.servicesBody}>
                <h2
                  className="fw-bold mb-3"
                  data-testid="test-title-OurService">
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </h2>
                <p className="fw-bold">
                  Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting, dll.
                </p>
              </div>
              <div className="row">
                {check_Services.map((service) => (
                  <div
                    className={`col-lg-12 col-12 ${classes.itemCheck}`}
                    key={service.id}>
                    <div className={classes.iconBox}>
                      <img
                        src={img_Check}
                        alt="icon-check"
                        className={`icon-check-${service.id}`}
                      />
                    </div>
                    <p className={`fw-bold ${classes.value}`}>
                      {service.paragraph}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default OurService;

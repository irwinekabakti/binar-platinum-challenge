import React, { Fragment } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import classes from "./Testimonial.module.css";
import data_Testimonials from "./data";

const Testimonial = () => {
  const leftButton = "<div class='button-carousel'>&lsaquo;</div>";
  const rightButton = "<div class='button-carousel'>&rsaquo;</div>";

  const setting = {
    loop: true,
    center: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 7000,
    margin: 10,
    navText: [leftButton, rightButton],

    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      700: {
        items: 2,
        nav: true,
      },
      1000: {
        items: 1,
        nav: true,
        loop: true,
        stagePadding: 250,
      },
    },
  };

  return (
    <Fragment>
      <section className={classes.testimonial} id="testimonial">
        <div className="container-fluid">
          <div className={classes.testimonialHeader}>
            <h2 className="fw-bold">Testimonial</h2>
            <p className="fw-bold">
              Berbagai review positif dari para pelanggan kami
            </p>
          </div>
          <OwlCarousel className="owl-theme" {...setting}>
            {data_Testimonials.map((data) => (
              <div className="item" key={data.id}>
                <div className={`card mb-3 ${classes.card}`}>
                  <div className="row">
                    <div
                      className={`col-lg-3 m-auto text-center ${classes.cardReviewer}`}>
                      <img
                        src={data.img}
                        className={`img-fluid mx-auto d-block rounded-circle mb-3 ${classes.itemImg}`}
                        alt={data.alt_Img}
                        height="10"
                      />
                    </div>
                    <div className="col-lg-9">
                      <div className="card-body">
                        <div className={`font-10 ${classes.icon}`}>
                          {[...Array(5)].map((item, index) => (
                            <i
                              key={`key-${index}`}
                              className="bi bi-star-fill text-warning mb-3"></i>
                          ))}
                        </div>
                        <p className={`card-text mt-3 ${classes.cardText}`}>
                          <q className="fw-bold">{data.quote}</q>
                        </p>
                        <h5 className={`card-title ${classes.cardTitle}`}>
                          {data.title}
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>
    </Fragment>
  );
};

export default Testimonial;

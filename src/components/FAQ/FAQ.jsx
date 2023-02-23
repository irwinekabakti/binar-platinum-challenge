import React from "react";
import data_FAQ from "./data";
import classes from "./FAQ.module.css";

const FAQ = () => {
  return (
    <section className={classes.FaqMod} id="faq">
      <div className="container">
        <div className="row">
          <div className={`col-lg-5 ${classes.faqHeader}`}>
            <h2 className="fw-bold">Frequently Asked Question</h2>
            <p className="fw-bold mb-3 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <div className="col-lg-7">
            {data_FAQ.map((item) => (
              <div
                className="accordion"
                id={`accordionFlushExample${item.id}`}
                key={item.id}>
                <div className={`accordion-item ${classes.accordionItem}`}>
                  <h2
                    className="accordion-header"
                    id={`flush-heading${item.id}`}>
                    <button
                      className={`accordion-button fw-bold collapsed ${classes.buttonAccordion}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#flush-collapse${item.id}`}
                      aria-expanded="true"
                      aria-controls={`flush-collapse${item.id}`}>
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={`flush-collapse${item.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${item.id}`}
                    data-bs-parent={`#accordionFlushExample${item.id}`}>
                    <div className={`accordion-body ${classes.bodyAccordion}`}>
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

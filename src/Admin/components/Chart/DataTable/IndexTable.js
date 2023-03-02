import React from "react";
import Table from "./CarsTable";
// import "./TableStyle.css";
import classes from "./TableStyle.module.css";

const IndexTable = () => {
  return (
    <main className={classes.containerDataChart}>
      <div className={classes.wrapperDataChart}>
        <h4 className="fw-bold">Dashboard</h4>
        <h6 className="fw-bold mt-3 mb-3">List Order</h6>
        <Table rowsPerPage={5} />
      </div>
    </main>
  );
};

export default IndexTable;

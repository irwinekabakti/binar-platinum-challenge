import React from "react";
import classes from "./Empty.module.css";

const Empty = () => {
  return (
    <section
      className={classes.emptySection}
      id="empty-section"
      data-testid="empty-Test"></section>
  );
};

export default Empty;

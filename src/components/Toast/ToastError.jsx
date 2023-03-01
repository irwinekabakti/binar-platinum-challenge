import React, { Fragment, useState } from "react";
import { Toast, ToastContainer, Form } from "react-bootstrap";

const ToastError = () => {
  const [close, setClose] = useState(true);
  const [position, setPosition] = useState("top-center");

  const toggleClose = () => {
    setClose(!close);
  };

  return (
    <Fragment>
      <ToastContainer className="p-3" position={position}>
        <Toast show={close} onClose={toggleClose}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-danger text-center">Error</strong>
            <small>now</small>
          </Toast.Header>
          <Toast.Body>Ups Error!</Toast.Body>
        </Toast>
      </ToastContainer>
    </Fragment>
  );
};

export default ToastError;

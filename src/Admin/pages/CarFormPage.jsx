import React from "react";
import NavbarAdmin from "../components/Navbar/Navbar";
import CarForm from "../components/CarForm/CarForm";
import { Col, Container, Row } from "react-bootstrap";

const CarFormPage = ({ currentPage }) => {
  return (
    <Container
      fluid
      className="p-0 m-0"
      style={{ minHeight: "100vh", background: "#F4F5F7" }}>
      <NavbarAdmin currentPage="cars" />
      <Row className="m-0">
        <Col
          xs="auto"
          className="d-none d-md-block h-100"
          style={{
            width: "20.14%",
            minWidth: "218px",
            maxWidth: "290px",
          }}></Col>
        <Col className="px-3">
          <p className="mt-4">
            <strong>
              Cars {">"} List Car {">"}
            </strong>
            {currentPage === "edit" ? "Edit Car" : "Add New Car"}
          </p>
          <h5 className="mt-4 mb-3">
            <strong>
              {currentPage === "edit" ? "Edit Car" : "Add New Car"}
            </strong>
          </h5>
          <CarForm formFunction={currentPage === "edit" ? "edit" : "add"} />
        </Col>
      </Row>
    </Container>
  );
};

export default CarFormPage;

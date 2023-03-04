import React from "react";
import NavbarAdmin from "../components/Navbar/Navbar";
import GrapichCar from "../components/Chart/GraphicCar";
import { Col, Container, Row } from "react-bootstrap";
import IndexTable from "../components/Chart/DataTable/IndexTable";

const Dashboard = () => {
  return (
    <div>
      <Container
        fluid
        className="p-0 m-0"
        style={{ minHeight: "100vh", background: "#f4f5f7" }}>
        <NavbarAdmin currentPage="dashboard" />
        <Row className="m-0">
          <Col
            xs="auto"
            className="d-none d-md-block h-100"
            style={{
              width: "20.14%",
              minWidth: "218px",
              maxWidth: "290px",
            }}></Col>
        </Row>
        <div
          className="dataGraphTable"
          style={{ marginLeft: "320px", marginTop: "30px" }}>
          <GrapichCar />
          <br />
        </div>
      </Container>
      <br />
      <br />
      <IndexTable />
    </div>
  );
};

export default Dashboard;

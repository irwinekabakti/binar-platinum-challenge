import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
  NavItem,
} from "react-bootstrap";
import iconSearch from "../../assets/fi_search.svg";
import iconDropdown from "../../assets/chevron-down.svg";
import iconDashboard from "../../assets/fi_home.svg";
import iconCars from "../../assets/fi_truck.svg";
import "./Navbar.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/action/admin-slice";

const NavbarComp = ({ currentPage }) => {
  const navbarRef = useRef();

  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [navPanelClass, setNavPanelClass] = useState("");
  const [navMenuClass, setNavMenuClass] = useState("");
  
  // const isTokenAdminExist = localStorage.getItem ("token_Admin")
  const navigate = useNavigate();
  const dispatch = useDispatch ()
  const handleLogoutAdmin = () => {
    dispatch (logout () ) 
    navigate ("/loginAdmin")
  }

  


  const handleSidebar = () => {
    if (!isSidebarActive) {
      setNavMenuClass("display-flex");
      setTimeout(() => {
        setNavMenuClass("display-flex open");
        setNavPanelClass("display-block");
      }, 10);
      setTimeout(() => {
        setNavMenuClass("display-flex open index");
      }, 360);
      setTimeout(() => {
        setNavPanelClass("display-block open");
      }, 150);
    } else {
      setNavPanelClass("display-block");
      setTimeout(() => {
        setNavPanelClass("");
      }, 300);
      setTimeout(() => {
        setNavMenuClass("display-flex");
      }, 140);
      setTimeout(() => {
        setNavMenuClass("");
      }, 490);
    }
    setIsSidebarActive(!isSidebarActive);
  };

  // in mobile layout, close the sidebar first when clicking nav-panel
  const clickNavPanel = (location) => {
    if (navbarRef.current.clientWidth < 768) {
      handleSidebar();
      setTimeout(() => {
        navigate(location);
      }, 490);
    } else navigate(location);
  };

  return (
    <>
      <div
        className={`bg-white navigation-panel position-absolute h-100 ${navPanelClass}`}
        style={{
          width: "20.14%",
          minWidth: "218px",
          maxWidth: "290px",
          paddingLeft: "70px",
          paddingTop: "4.375rem",
          fontFamily: "Arial, sans-serif",
          fontSize: "0.875rem",
          lineHeight: 1.4286,
          fontWeight: "700",
        }}>
        {currentPage === "dashboard" && (
          <div className="dashboard-menu w-100 flex-column">
            <p
              className="w-100 ps-4 pe-3"
              style={{
                margin: "35px 0 19px 0",
                color: "#8A8A8A",
              }}>
              DASHBOARD
            </p>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li
                className="ps-4 pe-3"
                style={{
                  paddingTop: "11px",
                  paddingBottom: "11px",
                  background: "#CFD4ED",
                  color: "#151515",
                }}>
                Dashboard
              </li>
            </ul>
          </div>
        )}
        {currentPage === "cars" && (
          <div className="cars-menu w-100 flex-column">
            <p
              className="w-100 ps-4 pe-3"
              style={{
                margin: "35px 0 19px 0",
                color: "#8A8A8A",
              }}>
              CARS
            </p>
            <ul className="p-0" style={{ listStyle: "none" }}>
              <li
                className="ps-4 pe-3"
                style={{
                  paddingTop: "11px",
                  paddingBottom: "11px",
                  background: "#CFD4ED",
                  color: "#151515",
                }}>
                List Car
              </li>
            </ul>
          </div>
        )}
      </div>
      <Nav
        className={`navigation-menu position-absolute flex-column ${navMenuClass}`}
        style={{
          width: "70px",
          height: "calc(100% - 4.375rem)",
          background: "#0D28A6",
          top: "4.375rem",
        }}>
        <Nav.Link
          className={`navigation-tab w-100 d-flex flex-column justify-content-center align-items-center text-center ${
            currentPage === "dashboard" && "selected"
          }`}
          style={{ height: "64px" }}
          onClick={() =>
            currentPage === "dashboard" ? null : clickNavPanel("/dashboard")
          }>
          <img src={iconDashboard} alt="dashboard" />
          <p
            className="m-0 text-white"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "0.75rem",
              lineHeight: 1.5,
            }}>
            Dashboard
          </p>
        </Nav.Link>
        <Nav.Link
          className={`navigation-tab w-100 d-flex flex-column justify-content-center align-items-center text-center ${
            currentPage === "cars" && "selected"
          }`}
          style={{ height: "64px" }}
          onClick={() =>
            currentPage === "cars" ? null : clickNavPanel("/cars")
          }>
          <img src={iconCars} alt="cars" />
          <p
            className="m-0 text-white"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "0.75rem",
              lineHeight: 1.5,
            }}>
            Cars
          </p>
        </Nav.Link>
      </Nav>
      <Navbar
        className="bg-white p-0"
        ref={navbarRef}
        style={{
          height: "4.375rem",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
        }}>
        <Container
          fluid
          className="h-100 p-0 d-flex justify-content-between align-items-center">
          <Col
            xs="auto"
            className="h-100 d-flex"
            style={{ width: "20.14%", minWidth: "218px", maxWidth: "290px" }}>
            <Button
              aria-label="Navigation Menu"
              className="menu-button d-flex justify-content-center align-items-center position-relative"
              style={{
                minWidth: "70px",
                border: "none",
                borderRadius: 0,
                background: "#0D28A6",
              }}
              onClick={handleSidebar}>
              <div
                style={{ width: "34px", height: "34px", background: "#CFD4ED" }}
              />
            </Button>
            <div
              className="h-100 w-100 d-flex align-items-center px-4"
              style={{
                minWidth: "148px",
                maxWidth: "220px",
              }}>
              <div
                style={{
                  width: "100px",
                  height: "34px",
                  background: "#CFD4ED",
                }}
              />
            </div>
          </Col>
          <Col className="h-100 d-flex justify-content-between">
            <div
              className="h-100 w-100 d-flex justify-content-center align-items-center"
              style={{ maxWidth: "72px" }}>
              <Button
                className="bg-white p-1 d-flex flex-column border-0"
                style={{ rowGap: "6px" }}>
                <span
                  className="bg-dark"
                  style={{ width: "18px", height: "2px" }}
                />
                <span
                  className="bg-dark"
                  style={{ width: "18px", height: "2px" }}
                />
                <span
                  className="bg-dark"
                  style={{ width: "18px", height: "2px" }}
                />
              </Button>
            </div>
            <div className="d-flex h-100">
              <Form className="d-none d-md-flex align-items-center pe-3">
                <fieldset disabled className="position-relative d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    style={{
                      borderRadius: "2px",
                      borderColor: "#D0D0D0",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "0.75rem",
                      lineHeight: 1.5,
                      padding: "9px 15px",
                      paddingLeft: "38px",
                    }}
                  />
                  <img
                    src={iconSearch}
                    aria-hidden="true"
                    alt="search"
                    className="position-absolute"
                    style={{ top: "9px", left: "12px" }}
                  />
                  <Button
                    className="bg-white"
                    style={{
                      color: "#0D28A6",
                      borderColor: "#0D28A6",
                      borderRadius: "2px",
                      fontFamily: "Arial, sans-serif",
                      fontSize: "0.875rem",
                      lineHeight: 1.4286,
                      fontWeight: "700",
                      padding: "8px 12px",
                    }}>
                    Search
                  </Button>
                </fieldset>
              </Form>
              <div
                className="h-100 w-100 pe-3 d-flex justify-content-center align-items-center"
                style={{ maxWidth: "11.875rem" }}>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle className="bg-white border-0 d-flex align-items-center admin-menu">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "38px",
                        height: "38px",
                        background: "#CFD4ED",
                      }}>
                      U
                    </div>
                    <div
                      className="px-2 text-dark"
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "0.875rem",
                        lineHeight: 1.4286,
                      }}>
                      Unis Badri
                    </div>
                    <img src={iconDropdown} aria-hidden="true" alt="" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item disabled>Options</Dropdown.Item>
                    <Dropdown.Item disabled>Something else</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={handleLogoutAdmin}>Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComp;

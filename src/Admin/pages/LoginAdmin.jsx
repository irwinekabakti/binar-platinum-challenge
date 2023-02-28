import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import carBackground from "../assets/background-admin.svg";
import { loginAdmin } from "../../store/action/admin-slice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const LogInPage = () => {
  const [emailAdmin, setEmailAdmin] = useState();
  const [passwordAdmin, setPasswordAdmin] = useState();

  const handleEmailAdmin = (e) => {
    e.preventDefault();
    setEmailAdmin(e.target.value);
  };

  const handlePasswordAdmin = (e) => {
    e.preventDefault();
    setPasswordAdmin(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAdminLogin = (e) => {
    // setLoading(true);
    e.preventDefault();
    console.log(`login admin is here`);
    dispatch(loginAdmin({ email: emailAdmin, password: passwordAdmin }))
      .unwrap()
      .then(() => {
        // setLoading(false);
        navigate("/dashboard");
      });
  };

  return (
    <Container
      fluid
      className="w-100 p-0 overflow-hidden position-relative"
      style={{ background: "skyblue", height: "100vh" }}>
      <div
        className="h-100 position-absolute"
        style={{
          backgroundImage: `url(${carBackground})`,
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          right: "17.85%",
          width: "82.15%",
        }}
      />
      <div
        className="h-100 position-absolute login-panel d-flex justify-content-center align-items-center"
        style={{ background: "#fff", right: 0 }}>
        <div className="mx-3 w-100" style={{ maxWidth: "23.125rem" }}>
          <div className="binar-logo" />
          <h1
            style={{
              fontFamily: "Arial",
              fontWeight: 700,
              fontSize: "1.5rem",
              lineHeight: 1.5,
              marginBottom: "2rem",
            }}>
            Welcome, Admin BCR
          </h1>
          <div
            style={{
              padding: "12px 25px",
              background: "rgba(208, 12, 26, 0.1)",
              borderRadius: "5px",
              fontFamily: "Arial, sans-serif",
              fontSize: "0.75rem",
              lineHeight: 1.5,
              marginBottom: "2rem",
              color: "#D00C1A",
            }}>
            Masukkan username dan password yang benar. Perhatikan penggunaan
            huruf kapital.
          </div>
          <Form onSubmit={handleAdminLogin}>
            <fieldset>
              <Form.Group controlId="email">
                <Form.Label
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: "1.4286",
                  }}>
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  onChange={handleEmailAdmin}
                  placeholder="Contoh: johndee@gmail.com"
                  className={"tab--invalid"}
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    padding: "10px 15px",
                  }}
                  required></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Masukkan email yang benar
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password" className="mt-3">
                <Form.Label
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.875rem",
                    lineHeight: "1.4286",
                  }}>
                  Password
                </Form.Label>
                <Form.Control
                  type="password"
                  onChange={handlePasswordAdmin}
                  minLength="6"
                  placeholder="6+ karakter"
                  className={"tab--invalid"}
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.75rem",
                    lineHeight: 1.5,
                    padding: "10px 15px",
                  }}
                  required></Form.Control>
                <Form.Control.Feedback type="invalid">
                  Masukan password minimal 6 karakter
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                type="submit"
                className="w-100"
                style={{
                  borderRadius: "2px",
                  background: "#0D28A6",
                  marginTop: "2rem",
                }}>
                Sign In
              </Button>
            </fieldset>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default LogInPage;

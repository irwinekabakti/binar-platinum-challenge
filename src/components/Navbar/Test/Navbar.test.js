import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import Navbar from "../Navbar";

describe("test component Navbar", () => {
  test("Test per component button hamburger", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const btnNavbar1 = screen.getByTestId("btn-navbar-hamburger");

    expect(btnNavbar1).not.toBeDisabled();
    expect(btnNavbar1).toHaveAttribute("type", "button");
  });

  /*
  test("Test per component button logout", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const btnNavbarLogout = screen.getByTestId("test-btnLogout");

    expect(btnNavbarLogout).not.toBeDisabled();
    // expect(btnNavbarLogout).toHaveAttribute("type", "button");
  });
  */

  /*
  test("Test per component button register", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const btnNavbarRegister = screen.getByTestId("test-btn-Logout");

    expect(btnNavbarRegister).not.toBeDisabled();
    // expect(btnNavbarRegister).toHaveAttribute("type", "button");
  });
  */

  test("Test per component button register", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const toggleHamburger = screen.getByTestId("toggle-navbar-hamburger");

    expect(toggleHamburger).toHaveStyle({ width: "50%" });
  });
});

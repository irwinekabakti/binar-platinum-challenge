import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import Navbar from "../Navbar";

describe("test component Navbar", () => {
  test("Test per component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const btnNavbar1 = screen.getByTestId("btn-navbar-1");

    expect(btnNavbar1).not.toBeDisabled();
    // expect(btnNavbar1).toBe
  });
});

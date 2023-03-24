import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import Footer from "../Footer";

describe("Test component Footer", () => {
  test("test per component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </Provider>
    );

    const containerLogoFooter = screen.getByTestId("contain-LogoFooter");
    const paragraphFooter = screen.getByTestId("paragraph-Footer");

    expect(containerLogoFooter).toBeVisible();
    expect(paragraphFooter).toBeVisible();

    expect(containerLogoFooter).toContainElement(paragraphFooter);
    expect(paragraphFooter).toHaveTextContent("Copyright Binar 2022");
  });
});

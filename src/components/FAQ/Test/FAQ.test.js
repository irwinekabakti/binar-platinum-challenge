import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import FAQ from "../FAQ";

describe("Test component FAQ", () => {
  test("test per component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FAQ />
        </BrowserRouter>
      </Provider>
    );

    const contentFAQ = screen.getByTestId("content-FAQ");
    const titleFAQ = screen.getByTestId("title-FAQ");
    const descriptionFAQ = screen.getByTestId("description-FAQ");

    expect(contentFAQ).toContainElement(titleFAQ);
    expect(contentFAQ).toContainElement(descriptionFAQ);
  });

  test("test per component title", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FAQ />
        </BrowserRouter>
      </Provider>
    );

    const titleFAQ = screen.getByTestId("title-FAQ");

    expect(titleFAQ).toHaveTextContent("Frequently Asked Question");
  });

  test("test per component description", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FAQ />
        </BrowserRouter>
      </Provider>
    );

    const descriptionFAQ = screen.getByTestId("description-FAQ");

    expect(descriptionFAQ).toHaveTextContent(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    );
  });
});

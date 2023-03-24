import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import CtaBanner from "../CtaBanner";

describe("Test component CTABanner", () => {
  test("test per component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CtaBanner />
        </BrowserRouter>
      </Provider>
    );

    const contentCTA = screen.getByTestId("content-CTABanner");
    const titleCTA = screen.getByTestId("title-CTABanner");
    const descriptionCTA = screen.getByTestId("description-CTABanner");

    expect(contentCTA).toBeVisible();
    expect(contentCTA).toContainElement(titleCTA);
    expect(contentCTA).toContainElement(descriptionCTA);
  });
});

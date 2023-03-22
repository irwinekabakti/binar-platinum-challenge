import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import WhyUs from "../WhyUs";

describe("Test component WhyUs", () => {
  test("test per component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <WhyUs />
        </BrowserRouter>
      </Provider>
    );

    const titleWhyUs = screen.getByTestId("title-WhyUs");

    expect(titleWhyUs.innerHTML).toEqual("Why Us?");
  });
});

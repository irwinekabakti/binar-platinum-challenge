import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import Testimonial from "../Testimonial";

jest.mock("react-owl-carousel", () => {
  return jest.fn();
});

describe("Test component Testimonial", () => {
  test("test per component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Testimonial />
        </BrowserRouter>
      </Provider>
    );

    const paragraphTestimonial = screen.getByTestId(
      "text-paragraph-Testimonial"
    );

    expect(paragraphTestimonial.innerHTML).toEqual(
      "Berbagai review positif dari para pelanggan kami"
    );
  });
});

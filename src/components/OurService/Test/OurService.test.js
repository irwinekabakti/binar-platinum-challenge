import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import OurService from "../OurService";

describe("Test component Our Service", () => {
  test("test per component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <OurService />
        </BrowserRouter>
      </Provider>
    );

    const titleOurService = screen.getByTestId("test-title-OurService");

    expect(titleOurService.innerHTML).toEqual(
      "Best Car Rental for any kind of trip in (Lokasimu)!"
    );
    expect(titleOurService).not.toBeDisabled();
  });
});

import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import CardUploadPayment from "../CardUploadPayment";
import { renderWithProviders } from "../../../utils/test-utils";

describe("Test CardUploadPayment", () => {
  test("Test per component toLocaleString", () => {
    renderWithProviders(<CardUploadPayment />, {
      preloadedState: {
        bankStore: {
          updateCar: {
            id: "test",
            total_price: 10000000,
          },
          getCarData: {
            id: "test",
          },
          bankName: "",
        },
      },
    });

    const titleCardUpload = screen.getByTestId("title-CardUploadPayment");

    expect(titleCardUpload).toHaveTextContent("Selesaikan Pembayaran sebelum");
  });
});

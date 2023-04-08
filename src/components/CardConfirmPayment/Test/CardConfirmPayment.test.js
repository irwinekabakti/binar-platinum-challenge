import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import { renderWithProviders } from "../../../utils/test-utils";
import CardConfirmPayment from "../CardConfirmPayment";

describe("Test component CardConfirmPayment", () => {
  test("it should be render CardConfirmPayment", () => {
    renderWithProviders(<CardConfirmPayment />, {
      preloadedState: {
        bankStore: {
          updateCar: {
            id: 4953,
            start_rent_at: "2023-04-10T00:00:00.000Z",
            status: false,
            finish_rent_at: "2023-04-12T00:00:00.000Z",
            UserId: 4,
            CarId: 2435,
            total_price: 15000000,
            updatedAt: "2023-04-07T18:13:45.699Z",
            createdAt: "2023-04-07T18:13:45.699Z",
            slip: null,
          },
          getCarData: {
            id: 2435,
            name: "AMG G63",
            category: "small",
            price: 5000000,
            status: false,
            start_rent_at: null,
            finish_rent_at: null,
            image:
              "https://firebasestorage.googleapis.com/v0/b/km-sib-2---secondhand.appspot.com/o/cars%2F1680537990798-brabus-p-900-rocket-edition-one-of-ten-2022.jpg?alt=media",
            createdAt: "2023-04-03T16:06:30.800Z",
            updatedAt: "2023-04-03T16:06:30.800Z",
          },
          bankName: "BCA",
        },
      },
    });

    const headingTitle1 = screen.getByTestId("heading-Title1");

    expect(headingTitle1).toHaveTextContent("Selesaikan Pembayaran sebelum");
  });
});

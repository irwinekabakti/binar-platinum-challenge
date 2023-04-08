import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { renderWithProviders } from "../../../utils/test-utils";
import { store } from "../../../store";
import Empty from "../Empty";
import Empty2 from "../Empty2";
import Empty3 from "../Empty3";
import Empty4 from "../Empty4";

describe("Test component Empty", () => {
  test("it should be render empty component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Empty />
        </BrowserRouter>
      </Provider>
    );

    const emptyTest = screen.getByTestId("empty-Test");

    expect(emptyTest).toBeVisible();
  });
});

describe("Test component Empty 2", () => {
  test("it should be render empty 2 component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Empty2 />
        </BrowserRouter>
      </Provider>
    );

    const content = screen.getByTestId("content-text");
    const paragraph = screen.getByTestId("test-paragraph");

    expect(content).toContainElement(paragraph);
    expect(paragraph).toHaveTextContent("Pembayaran");
  });
});

describe("Test component Empty 3", () => {
  test("it should be render empty 3 component", () => {
    renderWithProviders(<Empty3 />, {
      preloadedState: {
        bankStore: {
          updateCar: {
            id: "4953",
            start_rent_at: "2023-04-10T00:00:00.000Z",
            status: false,
            finish_rent_at: "2023-04-12T00:00:00.000Z",
            UserId: "4",
            CarId: "2435",
            total_price: 15000000,
            updatedAt: "2023-04-07T18:13:45.699Z",
            createdAt: "2023-04-07T18:13:45.699Z",
            slip: null,
          },
          getCarData: {
            id: "2435",
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

    const contentOrder = screen.getByTestId("content-order");
    const orderTest = screen.getByTestId("order-test");
    const contentInfoBank = screen.getByTestId("content-infoBank");
    const infoBankName = screen.getByTestId("info-bankName");

    expect(contentInfoBank).toContainElement(infoBankName);
    expect(contentOrder).toContainElement(orderTest);
    expect(contentOrder).toHaveStyle({ marginTop: "-15px" });
  });
});

describe("Test component Empty 4", () => {
  test("it should be render empty 4 component", () => {
    renderWithProviders(<Empty4 />, {
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

    const contentOrder = screen.getByTestId("content-order");
    const orderTest = screen.getByTestId("order-test");

    expect(contentOrder).toContainElement(orderTest);
  });
});

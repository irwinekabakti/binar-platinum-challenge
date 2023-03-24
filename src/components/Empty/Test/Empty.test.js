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
  test("test per component", () => {
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
  test("test per component", () => {
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
  test("test per component", () => {
    renderWithProviders(<Empty3 />, {
      preloadedState: {
        bankStore: {
          updateCar: {
            id: "test",
          },
          getCarData: {
            id: "test",
          },
          bankName: "",
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
  test("test per component", () => {
    renderWithProviders(<Empty4 />, {
      preloadedState: {
        bankStore: {
          updateCar: {
            id: "test",
          },
          getCarData: {
            id: "test",
          },
          bankName: "",
        },
      },
    });

    const contentOrder = screen.getByTestId("content-order");
    const orderTest = screen.getByTestId("order-test");

    expect(contentOrder).toContainElement(orderTest);
  });
});

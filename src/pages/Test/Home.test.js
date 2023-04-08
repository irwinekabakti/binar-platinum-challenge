import { BrowserRouter } from "react-router-dom";
import Renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../store";
import Home from "../Home";

jest.mock("react-owl-carousel", () => {
  return jest.fn();
});

describe("UI Homepage test", () => {
  test("UI Homepage should match snapshot", () => {
    const snapshot = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});

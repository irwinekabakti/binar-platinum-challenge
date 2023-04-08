import { BrowserRouter } from "react-router-dom";
import Renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../store";
import Payment from "../Payment";

describe("UI Payment test", () => {
  test("UI payment should match snapshot", () => {
    const snapshot = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Payment />
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});

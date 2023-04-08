import { BrowserRouter } from "react-router-dom";
import Renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../store";
import ResultCar from "../ResultCar";

describe("UI ResultCar test", () => {
  test("UI ResultCar should match snapshot", () => {
    const snapshot = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <ResultCar />
        </BrowserRouter>
      </Provider>
    );

    expect(snapshot).toMatchSnapshot();
  });
});

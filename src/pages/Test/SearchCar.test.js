import { BrowserRouter } from "react-router-dom";
import Renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../store";
import SearchCar from "../SearchCar";

describe("UI SearchCar test", () => {
  test("UI SearchCar should match snapshot", () => {
    const snapshot = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCar />
        </BrowserRouter>
      </Provider>
    );

    expect(snapshot).toMatchSnapshot();
  });
});

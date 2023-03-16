import Detail from "../Detail";
import { BrowserRouter } from "react-router-dom";
import Renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("UI detail test", () => {
  test("UI detail should match snapshot", () => {
    const snapshot = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Detail />
        </BrowserRouter>
      </Provider>
    ).toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});

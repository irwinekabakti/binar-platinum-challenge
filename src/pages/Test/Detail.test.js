import Detail from "../Detail";
import { BrowserRouter } from "react-router-dom";
import Renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
// import { renderWithProviders } from "../../utils/test-utils";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("UI detail test", () => {
  test("UI detail should match snapshot", () => {
    // renderWithProviders(<Detail />);
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

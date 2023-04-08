import { BrowserRouter } from "react-router-dom";
import Renderer from "react-test-renderer";
import { describe, test, expect } from "@jest/globals";
import { Provider } from "react-redux";
import { store } from "../../store";
import Etiket from "../ETiket";

describe("UI ETicket test", () => {
  test("UI ETicket should match snapshot", () => {
    const snapshot = Renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Etiket />
        </BrowserRouter>
      </Provider>
    ).toJSON();

    expect(snapshot).toMatchSnapshot();
  });
});

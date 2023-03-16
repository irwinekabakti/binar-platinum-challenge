import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";
import LogInPage from "../LoginAdmin";

describe("Test handle login in LoginAdmin", () => {
  test("test button in LogInPage", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LogInPage />
        </BrowserRouter>
      </Provider>
    );

    const buttonSignIn = screen.getByText("Sign In");
    fireEvent.click(buttonSignIn);

    expect(buttonSignIn).not.toBeDisabled();
    expect(buttonSignIn).toHaveTextContent("Sign In");
  });
});

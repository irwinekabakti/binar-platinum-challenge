import SignUp from "../SignUp";
import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";

describe("Test handle register", () => {
  test("after click button should navigate to SignIn", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignUp />
        </BrowserRouter>
      </Provider>
    );

    const buttonSignUp = screen.getAllByRole("button")[2];
    fireEvent.click(buttonSignUp);

    expect(buttonSignUp).not.toBeDisabled();
    expect(buttonSignUp).toHaveTextContent("Sign Up");
  });
});

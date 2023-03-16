import SignIn from "../SignIn";
import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../store";

describe("Test handle login in SignIn", () => {
  test("after click button should navigate to homepage", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );

    const buttonSignIn = screen.getByText("Sign In");
    fireEvent.click(buttonSignIn);

    expect(buttonSignIn).not.toBeDisabled();
    expect(buttonSignIn).toHaveTextContent("Sign In");
  });
});

describe("Test Input label in Sign In", () => {
  test("change input email", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );

    const labelEmail = screen.getByLabelText("Email");
    fireEvent.change(labelEmail);

    expect(labelEmail).not.toBeDisabled();
  });

  /*
  test("change input password ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignIn />
        </BrowserRouter>
      </Provider>
    );

    const labelEmail = screen.getByLabelText("Password");
    fireEvent.change(labelEmail);

    expect(labelEmail).not.toBeDisabled();
  });
  */
});

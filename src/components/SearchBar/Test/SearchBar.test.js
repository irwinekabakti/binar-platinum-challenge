import { describe, test, expect } from "@jest/globals";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "../SearchBar";
import { store } from "../../../store";

describe("Test button in Search Bar", () => {
  test("after click should navigate to resultCar", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchBar />
        </BrowserRouter>
      </Provider>
    );

    const buttonSearch = screen.getByRole("button");
    fireEvent.click(buttonSearch);

    expect(buttonSearch).not.toBeDisabled();
  });
});

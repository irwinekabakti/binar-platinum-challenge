import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
// import userReducer from '../features/users/userSlice'
import authSlice from "../store/action/action-slice";
import registerSlice from "../store/action/register-slice";
import authAdminSlice from "../store/action/admin-slice";
import bankSlice from "../store/action/bank-slice";
import { BrowserRouter } from "react-router-dom";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        authStore: authSlice.reducer,
        regStore: registerSlice.reducer,
        adminStore: authAdminSlice.reducer,
        bankStore: bankSlice.reducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <BrowserRouter>
        <Provider store={store}>{children}</Provider>
      </BrowserRouter>
    );
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

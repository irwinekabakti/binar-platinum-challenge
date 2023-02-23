import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./action/action-slice";

export const store = configureStore({
  reducer: {
    authStore: authSlice.reducer,
  },
});

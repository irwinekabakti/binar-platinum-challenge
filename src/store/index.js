import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./action/action-slice";
import registerSlice from "./action/register-slice";
import bankSlice from "./action/bank-slice";

export const store = configureStore({
  reducer: {
    authStore: authSlice.reducer,
    regStore: registerSlice.reducer,
    bankStore: bankSlice.reducer,
  },
});

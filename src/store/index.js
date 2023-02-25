import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./action/action-slice";
import authSliceRegister from "./action/register-slice";

export const store = configureStore({
  reducer: {
    authStore: authSlice.reducer,
    regStore: authSliceRegister.reducer,
  },
});

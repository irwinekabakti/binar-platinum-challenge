import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./action/action-slice";
import authAdminSlice from "./action/admin-slice";
import registerSlice from "./action/register-slice";

export const store = configureStore({
  reducer: {
    authStore: authSlice.reducer,
    regStore: registerSlice.reducer,
    adminStore: authAdminSlice.reducer,
  },
});

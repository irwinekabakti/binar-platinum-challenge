import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./action/action-slice";
import authAdminSlice from "./action/admin-slice";
import registerSlice from "./action/register-slice";
import bankSlice from "./action/bank-slice";
import dashboardSlice from "./action/dashboard-slice";
// import uploadSlice from "./action/payment-slice";

export const store = configureStore({
  reducer: {
    authStore: authSlice.reducer,
    regStore: registerSlice.reducer,
    adminStore: authAdminSlice.reducer,
    bankStore: bankSlice.reducer,
    dashboardStore: dashboardSlice.reducer,
    // uploadStore: uploadSlice.reducer,
  },
});

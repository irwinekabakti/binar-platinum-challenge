import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../api/BASE_API";

const registerCustomer = createAsyncThunk(
  "authentication/register",
  async (payload) => {
    try {
      const get = await axios.post(`${BASE_API}/customer/auth/login`, payload);

      return get.data.role;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isRegister: !!localStorage.getItem("tokenRegister"),
};

const authSliceRegister = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isRegister = action.payload;
    },
    logout(state, action) {
      localStorage.removeItem("tokenRegister");
      state.isRegister = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerCustomer.fulfilled, (state, action) => {
      localStorage.setItem("tokenRegister", action.payload);
      authSliceRegister.caseReducers.login(state, {
        payload: !!action.payload,
        type: registerCustomer.typePrefix,
      });
    });
  },
});

export const { login, logout } = authSliceRegister.actions;

export { registerCustomer };

export default authSliceRegister;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../api/BASE_API";

const initialState = { isAuthenticated: !!localStorage.getItem("token") };

const loginCustomer = createAsyncThunk(
  "authentication/login",
  async (payload) => {
    try {
      const get = await axios.post(`${BASE_API}/customer/auth/login`, payload);

      return get.data.access_token;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = action.payload;
    },
    logout(state, action) {
      localStorage.removeItem("token");
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginCustomer.fulfilled, (state, action) => {
      localStorage.setItem("token", action.payload);
      authSlice.caseReducers.login(state, {
        payload: !!action.payload,
        type: loginCustomer.typePrefix,
      });
    });
  },
});

export const { login, logout } = authSlice.actions;

export { loginCustomer };

export default authSlice;

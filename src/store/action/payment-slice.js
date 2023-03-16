import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../api/BASE_API";

const initialState = {
  isUploaded: !!false,
  paymentSlip: null,
};

const uploadPayment = createAsyncThunk("upload/payment", async (payload) => {
  try {
    const config = {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    };

    const response = await axios.put(
      `${BASE_API}/customer/order/${payload}/slip`,
      payload,
      config
    );

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const getSlip = createAsyncThunk("download/slipPayment", async (payload) => {
  try {
    const config = {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    };
    const slipPayment = await axios.get(
      `${BASE_API}/customer/order/${payload}`,
      config
    );

    return slipPayment;
  } catch (error) {
    console.log(error);
    throw error;
  }
});

const uploadSlice = createSlice({
  name: "uploadPaymentProof",
  initialState,
  reducers: {
    isPaymentUploaded(state, action) {
      state.isUploaded = action.payload;
    },
    getPaymentSlip(state, action) {
      state.paymentSlip = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(uploadPayment.fulfilled, (state, action) => {
      console.log(action.payload);
      uploadSlice.caseReducers.isPaymentUploaded(state, action);
    });
    builder.addCase(getSlip.fulfilled, (state, action) => {
      uploadSlice.caseReducers.getPaymentSlip(state, action);
    });
  },
});

export const { isPaymentUploaded, getPaymentSlip } = uploadSlice.actions;

export { uploadPayment, getSlip };

export default uploadSlice;

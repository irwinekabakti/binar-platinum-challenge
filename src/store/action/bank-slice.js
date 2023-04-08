import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../api/BASE_API";

const initialState = {
  updateCar: localStorage.getItem("updateCar")
    ? JSON.parse(localStorage.getItem("updateCar"))
    : [],
  getCarData: localStorage.getItem("getCarData")
    ? JSON.parse(localStorage.getItem("getCarData"))
    : [],
  bankName: localStorage.getItem("bankName")
    ? JSON.parse(localStorage.getItem("bankName"))
    : null,
};

const bankPayment = createAsyncThunk("option/payment", async (payload) => {
  try {
    const config = {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    };
    const getCar = await axios.get(
      `${BASE_API}/customer/car/${payload}`,
      config
    );
    return getCar.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
});

const createOrder = createAsyncThunk("order/rentCar", async (payload) => {
  try {
    const config = {
      headers: {
        access_token: localStorage.getItem("token"),
      },
    };
    const getOrderCar = await axios.post(
      `${BASE_API}/customer/order`,
      payload,
      config
    );
    return getOrderCar.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
});

const getOrderCar = createAsyncThunk(
  "getUpdateCar/orderCar",
  async (payload) => {
    try {
      const config = {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      };
      const getOrderCar = await axios.get(
        `${BASE_API}/customer/order/${payload}`,
        config
      );
      return getOrderCar.data;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }
);

const uploadSlip = createAsyncThunk(
  "upload/slipOrder",
  async (payload, thunkAPI) => {
    try {
      const config = {
        headers: {
          access_token: localStorage.getItem("token"),
        },
      };
      const state = thunkAPI.getState();
      let formData = new FormData();
      formData.append("slip", payload);
      const slipPayment = await axios.put(
        `${BASE_API}/customer/order/${state.bankStore.updateCar.id}/slip`,
        formData,
        config
      );

      return slipPayment.data;
    } catch (error) {
      // console.log(error);
      throw error;
    }
  }
);

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    updateCar(state, action) {
      localStorage.setItem("updateCar", JSON.stringify(action.payload));
      state.updateCar = action.payload;
    },
    getCarData(state, action) {
      localStorage.setItem("getCarData", JSON.stringify(action.payload));
      state.getCarData = action.payload;
    },
    updateBankName(state, action) {
      localStorage.setItem("bankName", JSON.stringify(action.payload));
      state.bankName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(bankPayment.fulfilled, (state, action) => {
      bankSlice.caseReducers.getCarData(state, action);
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
      bankSlice.caseReducers.updateCar(state, action);
    });
    builder.addCase(getOrderCar.fulfilled, (state, action) => {
      bankSlice.caseReducers.updateCar(state, action);
    });
    builder.addCase(uploadSlip.fulfilled, (state, action) => {
      bankSlice.caseReducers.updateCar(state, action);
    });
  },
});

export default bankSlice;

export const { updateCar, getCarData, updateBankName } = bankSlice.actions;
export { bankPayment, createOrder, getOrderCar, uploadSlip };

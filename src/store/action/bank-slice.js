/*
import  { paymentStore as createStore } from "redux"

const initialState = {
    updateCar: [],
    getCarData: [],
    bankTransfer:"", 
}

const actionBank=(state=initialState, action) => {
    if (action.type=== "GetCarData") {
        return {
            ...state,
            getCarData:action.payload
        }
    }
    return state
}  
const store= paymentStore(actionBank)
*/


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_API from "../../api/BASE_API";

const initialState = {
    updateCar: [],
    getCarData: [],
    bankTransfer:"", 
}

const bankPayment = createAsyncThunk ( "option/payment",async (payload) => {
    try {
        const config = {
            headers: {
              access_token:localStorage.getItem("token")
                
            },
          };
        const getCar = await axios.get(`${BASE_API}/customer/car/${payload}`,config)
        return getCar.data
    } catch(error) {
      console.log(error);
      throw error;
    }
    
})


const bankSlice= createSlice ({
    name: "bank", 
    initialState,
    reducers: {
        updateCar(state,action) {
            state.updateCar = action.payload
        },
        getCarData(state,action) {
            state.getCarData = action.payload
        },
        setBankTransfer (state,action) {
            state.bankTransfer = action.payload
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(bankPayment.fulfilled, (state,action) => {
            bankSlice.caseReducers.getCarData (state,action)
        })
    }
})

export default bankSlice

export const { updateCar,getCarData,setBankTransfer } = bankSlice.actions;
export { bankPayment}
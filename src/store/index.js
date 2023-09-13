import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import productSlice from "./productSlice/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    products:productSlice
  }
})
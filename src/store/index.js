import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import productSlice from "./productSlice/productSlice";
import { navBarReducer } from "./navbarSlice/navbarSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    products:productSlice,
    navbar: navBarReducer
  }})
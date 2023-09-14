import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { navBarReducer } from "./navbarSlice/navbarSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    navbar: navBarReducer
  }
})
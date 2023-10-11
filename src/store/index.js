import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import productSlice from "./productSlice/productSlice";
import { navBarReducer } from "./navbarSlice/navbarSlice";
import singleProductSlice from "./singleProductSlice/singleProductSlice";
import cartSlice from "./cartSlice/cartSlice";
import favoriteSlice from "./favoriteSlice/favoriteSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, 
    products:productSlice,
    navbar: navBarReducer, 
    singleProduct: singleProductSlice, 
    cart: cartSlice, 
    favorite: favoriteSlice
  }})
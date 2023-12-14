import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import axios from "axios";
import productsApi from "../../api/products/products.js";

export const getProducts = createAsyncThunk('products/getProducts', async (_, thunkAPI) => {
  try {
    const data = await productsApi.findProducts()
    return data?.data
  } catch (e) {
    console.log(e)
    thunkAPI.rejectWithValue(e)
  }
  
})

const productSlice = createSlice({
  name: 'products',
  initialState: {
    productsData: [],
    error: '',
    isLoaded: false
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoaded = true
    },
    [getProducts.fulfilled]: ((state, {payload}) => {
      state.isLoaded = false
      state.productsData = payload
    }),
    [getProducts.rejected]: ((state, {payload}) => {
      state.isLoaded = false
      state.error = payload
    }),
  }
})

export default productSlice.reducer
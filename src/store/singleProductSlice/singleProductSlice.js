import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import productsApi from "../../api/profducts/products.js";
// import axios from 'axios'

export const getSingleProduct = createAsyncThunk('singleProduct/getSingleProduct', async (id) => {
  //const {data}=await axios('https://651536f3dc3282a6a3ce04f0.mockapi.io/furniture/'+ id)
  return await productsApi.findOneProduct(id)
})
const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    singleProductData: {},
    isLoading: false,
    error: ''
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleProduct.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSingleProduct.fulfilled, (state, {payload}) => {
        state.isLoading = false;
        state.singleProductData = payload?.data
      })
      .addCase(getSingleProduct.rejected, (state, {payload}) => {
        state.isLoading = false;
        state.error = payload
      })
  }
})
export default singleProductSlice.reducer
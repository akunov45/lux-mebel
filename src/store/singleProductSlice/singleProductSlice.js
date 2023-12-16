import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import productsApi from "../../api/products/products.js";

export const getSingleProduct = createAsyncThunk('singleProduct/getSingleProduct', async (id) => {
  return await productsApi.findOneProduct(id)
})

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    singleProductData: {},
    isLoading: false,
    error: ''
  },
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
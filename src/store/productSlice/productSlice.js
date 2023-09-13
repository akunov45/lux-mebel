import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts=createAsyncThunk('products/getProducts', async()=>{
    const {data}=await axios('https://6500aa4318c34dee0cd545ca.mockapi.io/api/v1/products')
    return data
})

const productSlice=createSlice({
    name:'products', 
    initialState:{
        productsData:[], 
        error:'', 
        isLoaded:false
    }, 
    reducers:{}, 
    extraReducers:{
        [getProducts.pending]: (state)=>{
            state.isLoaded=true
        },
        [getProducts.fulfilled]: ((state, {payload})=>{
            state.isLoaded=false
            state.productsData=payload
        }),
        [getProducts.pending]: ((state, {payload})=>{
            state.isLoaded=false
            state.error=payload
        }),

    }
})

export default productSlice.reducer
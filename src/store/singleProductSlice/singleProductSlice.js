import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const getSingleProduct=createAsyncThunk('singleProduct/getSingleProduct', async(id)=>{
    const {data}=await axios('https://651536f3dc3282a6a3ce04f0.mockapi.io/furniture/'+ id)
    console.log(data);
    return data
})
const singleProductSlice=createSlice({
    name:'singleProduct', 
    initialState:{
        singleProductData:{}, 
        isLoading:false, 
        error:''
    }, 
    reducers:{}, 
    extraReducers:(builder)=>{
        builder
        .addCase(getSingleProduct.pending, (state)=>{
            state.isLoading=true
        })
        .addCase(getSingleProduct.fulfilled, (state, {payload})=>{
            state.isLoading=false;
            state.singleProductData=payload
        })
        .addCase(getSingleProduct.rejected, (state, {payload})=>{
            state.isLoading=false;
            state.error=payload
        })
    }
})
export default singleProductSlice.reducer
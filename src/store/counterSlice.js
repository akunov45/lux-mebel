import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment() { }
  }
})

export const { reducer: counterReducer } = counterSlice
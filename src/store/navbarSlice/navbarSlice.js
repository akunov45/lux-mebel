import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isHiddenNav: false
  },
  reducers: {
    setIsHiddenNav(state, { payload }) {
      state.isHiddenNav = payload
    }
  }
})

export const { setIsHiddenNav } = navBarSlice.actions
export const { reducer: navBarReducer } = navBarSlice
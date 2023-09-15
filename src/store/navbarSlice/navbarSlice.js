import { createSlice } from "@reduxjs/toolkit";

const navBarSlice = createSlice({
  name: 'navbar',
  initialState: {
    isHiddenNav: false,
    isActive: false,
    fixed: ""
  },
  reducers: {
    setIsHiddenNav(state, { payload }) {
      state.isHiddenNav = payload
    },
    showBurgerMenu: (state, { payload }) => {
      state.isActive = payload
    },
    burgerFixed: (state, { payload }) => {
      state.fixed = payload
    }
  }
})

export const { setIsHiddenNav, showBurgerMenu, burgerFixed } = navBarSlice.actions
export const { reducer: navBarReducer } = navBarSlice
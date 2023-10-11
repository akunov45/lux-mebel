import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice=createSlice({
    name: 'favorite', 
    initialState: {
        favoriteData:[], 
        isLoading:false, 
        error: ''
    }, 
    reducers:{
        addItemToFav(state, {payload}){
            const item={...payload}
            const hasInCart=state.favoriteData.find(el=>el.id===payload.id)

            if(hasInCart===undefined){
                state.favoriteData.push(item)
            }  else {
                hasInCart
            }
            localStorage.setItem('favoriteCart', JSON.stringify(state.favoriteData ))
        },
        getFromLSFav(state){
            const items=JSON.parse(localStorage.getItem('favoriteCart')) || []
            state.favoriteData=items
        }
    }, 
    extraReducers:{}
})
export const {addItemToFav, getFromLSFav}=favoriteSlice.actions
export default favoriteSlice.reducer
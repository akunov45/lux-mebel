import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart', 
    initialState: {
        cartData: [], 
        isLoading:false, 
        error: ''
    }, 
    reducers :{
        addItemToCart(state, action){
            const item={...action.payload, count:1}
            const hasInCart=state.cartData.find(el=>el.id===action.payload.id)

            if(hasInCart==undefined){
                state.cartData.push(item)
            } else {
                hasInCart.count++
            }
            localStorage.setItem('cartStorage', JSON.stringify(state.cartData))
        },
       getFromLSCart(state){
        // const items=localStorage.getItem(JSON.parse('cartStorage'))
        const items=JSON.parse(localStorage.getItem('cartStorage')) || []
        state.cartData=items

       }, 
       delItemFromCart(state, action){
        const items=state.cartData.filter(el=>el.id!==action.payload)
        state.cartData=items
       }
    }, 
    extraReducers:{}
})

export const {addItemToCart, getFromLSCart, delItemFromCart}=cartSlice.actions
export default cartSlice.reducer
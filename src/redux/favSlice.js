import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: localStorage.getItem("favlist") ? JSON.parse(localStorage.getItem("favlist")) : [],
    cartTotalAmount: 0,
}
const favSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1;
            }
            else {
                const temp = {
                    ...action.payload, cartQuantity: 1
                }
                state.cartItems.push(temp);
            }
            localStorage.setItem('favlist', JSON.stringify(state.cartItems))
        },
        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removeItem;
            localStorage.setItem('favlist', JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state, action) => {
            state.cartItems = [];
            localStorage.setItem("cartNike", JSON.stringify(state.cartItems));
        },
    }
});

export const { setAddItemToCart, setRemoveItemFromCart, setClearCartItems } = favSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;
export default favSlice.reducer;
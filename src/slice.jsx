import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getProducts = createAsyncThunk("ecommerce/getProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});
export const ecommerceSlice = createSlice({
    name: "ecommerce",
    initialState: {
        products: [],
        isLoading: false,
        cart: [],

    },

    reducers: {
        addToCart : function(state, action){
        state.cart = [...state.cart , action.payload]
     } 
    },
    extraReducers: {
        [getProducts.pending]: function (state) {
            state.isLoading = false
        },
        [getProducts.fulfilled]: function (state, action) {
            state.isLoading = true
            state.products = action.payload;
        },
        [getProducts.rejected]: function (state) {
            state.isLoading = false
            console.log(getProducts.rejected)
        },
    },


})
export const { addToCart} = ecommerceSlice.actions
export default ecommerceSlice.reducer;
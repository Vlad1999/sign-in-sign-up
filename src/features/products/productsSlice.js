import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: 'products',
    initialState : {
        products: [],
    },
    reducers: {
        getProducts: (state, action) => {
            console.log(action.payload);
            state.products = action.payload;
        },
    }
});

export const { getProducts, addProducts } = productsSlice.actions;

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
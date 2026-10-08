import { IProduct } from "@/types/product";
import { PRODUCTS } from "@/utils/product";
import { createSlice } from "@reduxjs/toolkit/react";

interface ICartItem {
    product: IProduct;
    quantity: number;
}

interface ICartState {
    items: ICartItem[];
    products: IProduct[];
}

const initialState: ICartState = {
    items: [],
    products: PRODUCTS,
}

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        addToCart: (state, action) => {
            const {product, quantity = 1} = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.product.id === product.id,);
            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity += quantity;
            } else {
                state.items.push({ product, quantity });
            }
        },
        removeFromCart: (state, action) => {
            const { productId, quantity = 1 } = action.payload;
            const existingItemIndex = state.items.findIndex((item) => item.product.id === productId,);
            if (existingItemIndex === -1) return;

            const existingItem = state.items[existingItemIndex];

            if (existingItem.quantity > quantity) {
                existingItem.quantity -= quantity;
            } else {
                state.items.splice(existingItemIndex, 1);
            }
        },
        filterProduct: (state, action) => {
            const searchTerm = action.payload;

            state.products = PRODUCTS.filter((item) => item.name.toLowerCase().includes(searchTerm) || 
            item.category.toLowerCase().includes(searchTerm),
        );
        },
    },
})

export const {addToCart, removeFromCart, filterProduct} = cartSlice.actions;

export default cartSlice.reducer;
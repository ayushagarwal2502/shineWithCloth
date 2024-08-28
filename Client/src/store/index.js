import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products-slice";
import cartSlice from "./cart-slice";

//Main Hub of redux
const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export default store;

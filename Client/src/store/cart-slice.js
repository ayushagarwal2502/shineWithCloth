import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    basket: [],
    totalPrice: 0,
  },
  reducers: {
    addToBasket(state, action) {
      let productIndex = state.basket.findIndex(
        (prod) => prod.id === action.payload.id
      );

      if (productIndex === -1) { 
        let likedProduct = {
          id: action.payload.id,
          imageURL: action.payload.imageURL,
          name: action.payload.name,
          type: action.payload.type,
          price: action.payload.price,
          color: action.payload.color,
          gender: action.payload.gender,
          quantity: 1,
        };
        state.basket.push(likedProduct);
      } else {
        state.basket[productIndex].quantity =
          state.basket[productIndex].quantity + 1;
      }

      state.totalPrice += action.payload.price;
    },
    removeFromBasket(state, action) {
      let productIndex = state.basket.findIndex(
        (prod) => prod.id === action.payload.id
      );

      state.totalPrice =
        state.totalPrice -
        state.basket[productIndex].quantity * state.basket[productIndex].price;

      state.basket.splice(productIndex, 1);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

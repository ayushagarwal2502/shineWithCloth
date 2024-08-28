import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({ 
  name: "products",
  initialState: {
    stock: [],
    searchTerm: " ",
  },
  reducers: {
    addToStock(state, action) {
      state.stock = action.payload.productsStock;
    },
                                                  
    updateStock(state, action) {
      let currentStock = state.stock;

      for (let x = 0; x < currentStock.length; x++) {
        if (
          currentStock[x].id === action.payload.updateIndex &&
          currentStock[x].quantity > 0
        ) {
          currentStock[x].quantity = parseInt(currentStock[x].quantity) - 1;
          break;
        }
      }

      state.stock = currentStock;
    },

    updateSearchTerm(state, action) {
      state.searchTerm = action.payload.currentTerm;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;

import { createReducer } from "@reduxjs/toolkit";
import { addItem, changeItem, removeItem } from "./itemsActions";

const initialState = {
  items: [],
};

export const itemsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      state.items = [...state.items, action.payload];
    })
    .addCase(removeItem, (state, action) => {
      state.items = state.items?.filter((i) => i?.id !== action.payload);
    })
    .addCase(changeItem, (state, action) => {
      state.items = state.items?.map((i) =>
        i?.id === action.payload.id ? { ...i, ...action.payload } : i
      );
    });
});

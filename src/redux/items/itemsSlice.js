import { createSlice } from "@reduxjs/toolkit";
import { addItem, fetchItems, removeItem } from "./itemsOperations";

const initialState = {
  items: [],
  isLoading: false,
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(addItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.items = [action.payload, ...state.items];
      state.isLoading = false;
    });
    builder.addCase(addItem.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(removeItem.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(removeItem.fulfilled, (state, action) => {
      state.items = state.items?.filter((i) => i?.id !== action.payload.id);
      state.isLoading = false;
    });
    builder.addCase(removeItem.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const itemsReducer = itemsSlice.reducer;

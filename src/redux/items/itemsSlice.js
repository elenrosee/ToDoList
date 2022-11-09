import { createSlice } from "@reduxjs/toolkit";
import { fetchItems } from "./itemsOperations";

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

    //   .addCase([fetchItems.fulfilled], (state, action) => {
    //     state.items = action.payload;
    //     state.isLoading = false;
    //   });
    // [fetchItems.rejected](state) {
    //   state.isLoading = false;
    // },
    // [addItem.pending](state) {
    //   state.isLoading = true;
    // },
    // [addItem.fulfilled](state, action) {
    //   state.items = [action.payload.data, ...state.items];
    //   state.isLoading = false;
    // },
    // [addItem.rejected](state) {
    //   state.isLoading = false;
    // },
    // [removeItem.pending]: (state) => {
    //   state.isLoading = true;
    // },
    // [removeItem.fulfilled]: (state, action) => {
    //   state.items = state.items?.filter(
    //     (i) => i?._id !== action.payload.data._id
    //   );
    //   state.isLoading = false;
    // },
    // [removeItem.rejected]: (state) => {
    //   state.isLoading = false;
    // },
  },
});

export const itemsReducer = itemsSlice.reducer;

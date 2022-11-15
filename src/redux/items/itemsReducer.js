import { createReducer } from "@reduxjs/toolkit";
import {
  addItem,
  changeItem,
  changeItemsOrder,
  removeItem,
} from "./itemsActions";

const initialState = {
  items: [],
};

export const itemsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addItem, (state, action) => {
      state.items = [
        { ...action.payload, order: state.items.length },
        ...state.items,
      ];
    })

    .addCase(removeItem, (state, action) => {
      state.items = state.items
        ?.filter((i) => i.id !== action.payload.id)
        .map((i) => {
          if (i.order > action.payload.order) {
            return { ...i, order: i.order - 1 };
          } else {
            return i;
          }
        });
    })

    .addCase(changeItem, (state, action) => {
      state.items = state.items?.map((i) => {
        if (i?.id === action.payload.id) {
          return { ...i, ...action.payload, order: state.items.length - 1 };
        } else if (i.order > action.payload.order) {
          return { ...i, order: i.order - 1 };
        } else {
          return i;
        }
      });
    })

    .addCase(changeItemsOrder, (state, action) => {
      const { selectedItem, item } = action.payload;

      if (selectedItem.order < item.order) {
        state.items = state.items?.map((i) => {
          if (i.id === selectedItem.id) {
            return { ...i, checked: item.checked, order: item.order };
          } else if (i.order > selectedItem.order && i.order <= item.order) {
            return { ...i, order: i.order - 1 };
          } else {
            return i;
          }
        });
      }

      if (selectedItem.order > item.order) {
        state.items = state.items?.map((i) => {
          if (i.id === selectedItem.id) {
            return { ...i, checked: item.checked, order: item.order };
          } else if (i.order < selectedItem.order && i.order >= item.order) {
            return { ...i, order: i.order + 1 };
          } else {
            return i;
          }
        });
      }
    });
});

import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3004";

export const fetchItems = createAsyncThunk(
  "fetchItems",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(`/items`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addItem = createAsyncThunk(
  "addItem",
  async (newItem, thunkAPI) => {
    try {
      const { data } = await axios.post(`/items`, newItem);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeItem = createAsyncThunk(
  "removeItem",
  async (itemId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/items/${itemId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeItem = createAsyncThunk(
  "patchItem",
  async (newItem, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/items/${newItem.id}`, newItem);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

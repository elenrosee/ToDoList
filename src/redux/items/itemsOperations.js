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
  "transactions/addTransaction",
  async (newTransaction, thunkAPI) => {
    try {
      const { data } = await axios.post(`/transactions`, newTransaction);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeItem = createAsyncThunk(
  "transactions/removeTransaction",
  async (idTransaction, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/transactions/${idTransaction}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const changeDate = createAction("transactions/changeDate");

// export const changeType = createAction("transactions/changeType");

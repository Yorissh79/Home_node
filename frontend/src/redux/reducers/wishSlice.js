import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishThunk = createAsyncThunk("/wish/get", async () => {
  const res = await axios.get("http://localhost:3169/wish");
  return res.data;
});

export const postWishThunk = createAsyncThunk("/wish/post", async (data) => {
  await axios.post("http://localhost:3169/wish", data);
  return data;
});

export const deleteWishThunk = createAsyncThunk("/wish/delete", async (id) => {
  await axios.delete(`http://localhost:3169/wish/${id}`);
  return id;
});

const wishSlice = createSlice({
  name: "wish",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder

      .addCase(getWishThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })

      .addCase(getWishThunk.pending, (state) => {
        state.loading = true;
      })

      .addCase(getWishThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(postWishThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data.push(action.payload);
      })

      .addCase(deleteWishThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.data.filter((item) => item._id != action.payload);
      });
  },
});

export default wishSlice.reducer;

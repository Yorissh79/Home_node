import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCardThunk = createAsyncThunk("/book/get", async () => {
    const res = await axios.get("http://localhost:3169/book")
    return res.data
})

const cardSlice = createSlice({
    name: "card",
    initialState:{

    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder

        .addCase(getCardThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        .addCase(getCardThunk.pending, (state) => {
            state.loading = true
        })

        .addCase(getCardThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export default cardSlice.reducer
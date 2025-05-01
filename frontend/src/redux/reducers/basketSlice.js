import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk("/basket/get", async () => {
    const res = await axios.get("http://localhost:3169/basket")
    return res.data
})

export const postBasketThunk = createAsyncThunk("/basket/post", async (data) => {
    await axios.post("http://localhost:3169/basket", data)
    return data
})

export const deleteBasketThunk = createAsyncThunk("/basket/delete", async (id) => {
    await axios.delete(`http://localhost:3169/basket/${id}`)
    return id
})

const basketSlice = createSlice({
    name : "basket",
    initialState: {

    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder

        .addCase(getBasketThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        .addCase(getBasketThunk.pending, (state) => {
            state.loading = true
        })

        .addCase(getBasketThunk.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })

        .addCase(postBasketThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data.push(action.payload)
        })

        .addCase(deleteBasketThunk.fulfilled, (state, action) => {
            state.loading = false
            state.data = state.data.filter((item) => item._id != action.payload)
        })
    }
})

export default basketSlice.reducer
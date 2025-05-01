import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./reducers/cardSilce"
import basketSlice from "./reducers/basketSlice"
import wishSlice from "./reducers/wishSlice"

export const store = configureStore({
    reducer: {
        card: cardSlice,
        basket: basketSlice,
        wish: wishSlice
    }
})
import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieNameListing";

export default configureStore({
    reducer: {
        movie: movieReducer
    }
})
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import creditReducer from "../features/movies/creditSlice";
import reviewReducer from "../features/movies/reviewSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        credit: creditReducer,
        review: reviewReducer,
    },
})
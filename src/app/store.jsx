import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies/moviesSlice";
import creditReducer from "../features/movies/creditSlice";
import reviewReducer from "../features/movies/reviewSlice";
import videoReducer from "../features/movies/videoSlice";
import genreReducer from "../features/movies/genreSlice";
import searchReducer from "../features/movies/searchSlice";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        credit: creditReducer,
        review: reviewReducer,
        video: videoReducer,
        genre: genreReducer,
        search: searchReducer,
    },
})
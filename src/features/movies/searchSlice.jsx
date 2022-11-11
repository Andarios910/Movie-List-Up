import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api/apiConfig";

export const getMoviesSearch = createAsyncThunk(
    'movies/getMoviesSearch',
    async(query) => {
        try {
            const res = await axios.get(`${request.baseUrl}/search/movie?api_key=${request.apiKey}&language=en-US&page=1&include_adult=false&query=${query}`);
            return res.data.results;
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    shows: [],
    isLoading: false,
    hasError: false,
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {

        [getMoviesSearch.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getMoviesSearch.fulfilled]: (state, {payload}) => {
            state.shows = payload
            state.isLoading = false
            state.hasError = true
        },
        [getMoviesSearch.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default searchSlice.reducer;
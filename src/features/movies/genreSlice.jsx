import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api/apiConfig";

export const getGenresMovie = createAsyncThunk(
    'genresMovie/getGenresMovies',
    async(id) => {
        try {
            const res = await axios.get(`${request.baseUrl}/discover/movie?api_key=${request.apiKey}&with_genres=${id}`);
            return res.data.results;
        }catch(error) {
            console.error(error)
        }
    }
)

const initialState = {
    genresMovie: [],
    isLoading: false,
    hasError: false,
}

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    extraReducers: {

        [getGenresMovie.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getGenresMovie.fulfilled]: (state, {payload}) => {
            state.genresMovie = payload
            state.isLoading = false
            state.hasError = false
        },
        [getGenresMovie.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default genreSlice.reducer;
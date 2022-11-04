import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api/apiConfig";

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async() => {
        try {
            const res = await axios.get(request.requestPopular);
            return res.data.results;
        }catch(error) {
            console.error(error)
        }
    }
)

export const getMoviesDetail = createAsyncThunk(
    'movies/getMoviesId',
    async(id) => {
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a69ac84e7a5ab50d30d9c6e241bda7f6&language=en-US`);
            return res;
        } catch(error) {
            console.error(error);
        }
    }
)

export const getMoviesSearch = createAsyncThunk(
    'movies/getMoviesSearch',
    async(query) => {
        try {
            const res = await axios.get(`http://notflixtv.herokuapp.com/api/v1/movies?search=${query}`);
            return res.data;
        }catch(error) {
            console.error(error);
        }
    }
)

export const getGenres = createAsyncThunk(
    'genres/getGenres',
    async() => {
        try {
            const res = await axios.get(`http://notflixtv.herokuapp.com/api/v1/movies/genres`);
            return res.data;
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    movies: [],
    shows: [],
    genres: [],
    isLoading: false,
    hasError: false,
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectMovieOrShow = []
        }
    },
    extraReducers: {
        //getMovies
        [getMovies.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getMovies.fulfilled]: (state, {payload}) => {
            state.movies = payload
            state.isLoading = false
            state.hasError = false
        },
        [getMovies.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },

        //getMoviesDetail
        [getMoviesDetail.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getMoviesDetail.fulfilled]: (state, {payload}) => {
            state.selectMovieOrShow =payload.data
            state.isLoading = false
            state.hasError = false
        },
        [getMoviesDetail.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },

        //getMovieSearch
        [getMoviesSearch.fulfilled]: (state, {payload}) => {
            state.shows = payload.data
        },

        //getGenres
        [getGenres.fulfilled]: (state, {payload}) => {
            state.genres = payload.data
        }
    }
})

export const { removeSelectedMovieOrShow } = moviesSlice.actions;

export default moviesSlice.reducer;
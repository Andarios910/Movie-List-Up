import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api/apiConfig";

export const getMovies = createAsyncThunk(
    'movies/getMovies',
    async() => {
        try {
            const res = await axios.get(`${request.baseUrl}${request.requestPopular}`);
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
            const res = await axios.get(`${request.baseUrl}/movie/${id}?api_key=${request.apiKey}&language=en-US`);
            return res.data;
        } catch(error) {
            console.error(error);
        }
    }
)

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

export const getTrending = createAsyncThunk(
    'trending/getTrending',
    async() => {
        try {
            const res = await axios.get(`${request.baseUrl}//trending/all/day?api_key=${request.apiKey}`);
            return res.data.results;
        }catch(error) {
            console.error(error);
        }
    }
)

export const getGenres = createAsyncThunk(
    'genres/getGenres',
    async() => {
        try {
            const res = await axios.get(`${request.baseUrl}/genre/movie/list?api_key=${request.apiKey}&language=en-US`);
            return res.data.genres;
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
            state.selectMovieOrShow =payload
            state.isLoading = false
            state.hasError = false
        },
        [getMoviesDetail.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },

        //getMovieSearch
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
        
        //Trending
        [getTrending.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getTrending.fulfilled]: (state, {payload}) => {
            state.trending = payload
            state.isLoading = false
            state.hasError = true
        },
        [getTrending.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },

        //getGenres
        [getGenres.fulfilled]: (state, {payload}) => {
            state.genres = payload
        }
    }
})

export const { removeSelectedMovieOrShow } = moviesSlice.actions;

export default moviesSlice.reducer;
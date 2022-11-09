import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api/apiConfig";

export const getCredit = createAsyncThunk(
    'credit/getCredit',
    async(id) => {
        try {
            const res = await axios.get(`${request.baseUrl}/movie/${id}/credits?api_key=${request.apiKey}&language=en-US`);
            return res.data;
        }catch(error) {
            console.error(error)
        }
    }
)

const initialState = {
    cast: [],
    crew: [],
    isLoading: false,
    hasError: false,
}

export const creditSlice = createSlice({
    name: 'credit',
    initialState,
    extraReducers: {
        //getMovies
        [getCredit.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getCredit.fulfilled]: (state, {payload}) => {
            state.cast = payload.cast
            state.crew = payload.crew
            state.isLoading = false
            state.hasError = false
        },
        [getCredit.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default creditSlice.reducer;
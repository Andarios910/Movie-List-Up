import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api/apiConfig";

export const getReview = createAsyncThunk(
    'review/getReview',
    async(id) => {
        try {
            const res = await axios.get(`${request.baseUrl}/movie/${id}/reviews?api_key=${request.apiKey}&language=en-US&page=1`);
            return res.data;
        }catch(error) {
            console.error(error)
        }
    }
)

const initialState = {
    review: [],
    isLoading: false,
    hasError: false,
}

export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    extraReducers: {
        //getReview
        [getReview.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getReview.fulfilled]: (state, {payload}) => {
            state.review = payload
            state.isLoading = false
            state.hasError = false
        },
        [getReview.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default reviewSlice.reducer;
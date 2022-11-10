import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import request from "../../api/apiConfig";

export const getVideo = createAsyncThunk(
    'video/getVideo',
    async(id) => {
        try {
            const res = await axios.get(`${request.baseUrl}/movie/${id}/videos?api_key=${request.apiKey}&language=en-US`);
            // console.log(res);
            return res.data.results;
        }catch(error) {
            console.error(error)
        }
    }
)

const initialState = {
    video: [],
    isLoading: false,
    hasError: false,
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    extraReducers: {
        //getReview
        [getVideo.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [getVideo.fulfilled]: (state, {payload}) => {
            state.video = payload
            state.isLoading = false
            state.hasError = false
        },
        [getVideo.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default videoSlice.reducer;
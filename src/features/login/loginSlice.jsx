import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { logInWithEmailAndPassword, signInWithGoogle } from "../../firebase";


export const handleLogin = createAsyncThunk(
    'login/handleLogin',
    async(formValues) => {
        try {
            const req = await logInWithEmailAndPassword(formValues.email, formValues.password)
            localStorage.setItem('token', JSON.stringify(req.user.accessToken))
            localStorage.setItem('user', JSON.stringify(req.user))
            setTimeout(() => {
                window.location.reload(1)
            }, 1500)
        }catch(error) {
            console.error(error);
        }
    }
)

export const googleOauth = createAsyncThunk (
    'login/googleOauth',
    async() => {
        try {
            const req = await signInWithGoogle();
            localStorage.setItem('token', JSON.stringify(req.accessToken))
            localStorage.setItem('user', JSON.stringify(req));
            setTimeout(() => {
                window.location.reload(1)
            }, 1500)
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    logInWithEmailAndPassword: [],
    signInWithGoogle: [],
    isLoading: false,
    hasError: false,
}

export const creditSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        [handleLogin.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [handleLogin.fulfilled]: (state, {payload}) => {
            state.logInWithEmailAndPassword = payload
            state.isLoading = false
            state.hasError = false
        },
        [handleLogin.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },

        [googleOauth.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [googleOauth.fulfilled]: (state, {payload}) => {
            state.signInWithGoogle = payload
            state.isLoading = false
            state.hasError = false
        },
        [googleOauth.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        },
    }
})

export default creditSlice.reducer;
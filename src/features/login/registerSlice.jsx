import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerWithEmailAndPassword } from "../../firebase";


export const handleRegister = createAsyncThunk(
    'register/handleRegister',
    async(formValues) => {
        try {
            const req = await registerWithEmailAndPassword(formValues.name, formValues.email, formValues.password)
            localStorage.setItem('token', JSON.stringify(req.accessToken));
            localStorage.setItem('user', JSON.stringify(req))
            setTimeout(() => {
                window.location.reload(1)
            }, 1500)
        }catch(error) {
            console.error(error);
        }
    }
)

const initialState = {
    registerWithEmailAndPassword: [],
    isLoading: false,
    hasError: false,
}

export const creditSlice = createSlice({
    name: 'register',
    initialState,
    extraReducers: {
        [handleRegister.pending]: (state) => {
            state.isLoading = true
            state.hasError = false
        },
        [handleRegister.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.hasError = false
        },
        [handleRegister.rejected]: (state) => {
            state.isLoading = false
            state.hasError = true
        }
    }
})

export default creditSlice.reducer;
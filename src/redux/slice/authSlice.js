import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: localStorage.getItem("token") || null,
    id: localStorage.getItem("id") || null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:  {
        signUp: (state, action) => {
            state.token = action.payload.token
            state.id = action.payload.id
            localStorage.setItem("token", state.token)
            localStorage.setItem("id", state.id)
        },
        logIn: (state, action) => {
            state.token = action.payload.token
            localStorage.setItem("token", state.token)
            localStorage.setItem("id", state.id)
        },
        logOut: (state) => {
            state.token = null
            state.id = null
            localStorage.removeItem("token");
            localStorage.removeItem("id");
        }
    }
})

export const {signUp, logIn, logOut} = authSlice.actions;
export default authSlice.reducer
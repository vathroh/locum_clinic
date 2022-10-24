import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {},
        idToken: "",
        refreshToken: "",
    },
    reducers: {
        update: (state, action) => {
            state.user = action.payload.user;
            state.idToken = action.payload.idToken;
            state.refreshToken = action.payload.refreshToken;
        },
    },
});

export const { update } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload.username;
        },
    },
});

export const {setUsername} = userSlice.reducer;

export default userSlice.reducer;
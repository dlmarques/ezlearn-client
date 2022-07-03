import { createSlice } from "@reduxjs/toolkit";

const profileUISlice = createSlice({
    name: 'profileUI',
    initialState: {
        isOpened: false,
    },
    reducers: {
        open(state) {
            state.isOpened = true
        },
        close(state) {
            state.isOpened = false
        }   
    }
})

export const profileUIActions = profileUISlice.actions;

export default profileUISlice;
import {createSlice} from '@reduxjs/toolkit'

const uploadUISlice = createSlice({
    name: 'uploadUI',
    initialState: {
        isOpened: false
    },
    reducers:{
        open(state) {
            state.isOpened = true
        },
        close(state) {
            state.isOpened = false
        }
    }
}) 

export const uploadUIActions = uploadUISlice.actions;

export default uploadUISlice;
import {createSlice} from '@reduxjs/toolkit'

const changeProfileModalSlice = createSlice({
    name: 'changeProfileUI',
    initialState: {
        isOpened: false
    },
    reducers: {
        openModal(state) {
            state.isOpened = true
        },
        closeModal(state) {
            state.isOpened = false
        }
    }
})

export const changeProfileModalActions = changeProfileModalSlice.actions;

export default changeProfileModalSlice;
import {createSlice} from '@reduxjs/toolkit'

const resetPasswordModalSlice = createSlice({
    name: 'resetPasswordModal',
    initialState: {
        resetIsVisible: false
    },
    reducers: {
        openResetModal(state) {
            state.resetIsVisible = true
        },
        closeResetModal(state) {
            state.resetIsVisible = false
        }
    }
})

export const resetPasswordModalActions = resetPasswordModalSlice.actions;

export default resetPasswordModalSlice;
import {createSlice} from '@reduxjs/toolkit'

const registerModalSlice = createSlice({
    name: 'registerModal',
    initialState: {
        registerIsVisible: false
    },
    reducers: {
        openRegisterModal(state) {
            state.registerIsVisible = true
        },
        closeRegisterModal(state) {
            state.registerIsVisible = false
        }
    }
})

export const registerModalActions = registerModalSlice.actions;

export default registerModalSlice;
import {createSlice} from '@reduxjs/toolkit'

const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: {
        loginIsVisible: false,
    },
    reducers: {
        openLoginModal(state) {
            state.loginIsVisible = true
        },
        closeLoginModal(state) {   
            state.loginIsVisible = false
        }
    }
})

export const loginModalActions = loginModalSlice.actions;

export default loginModalSlice;
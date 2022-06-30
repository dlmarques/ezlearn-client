import {createSlice} from '@reduxjs/toolkit'

const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState: {
        mobileMenuIsVisible: false
    },
    reducers: {
        openMobileMenu(state) {
            state.mobileMenuIsVisible = true
        },
        closeMobileMenu(state) {
            state.mobileMenuIsVisible = false
        }
    }
})

export const mobileMenuActions = mobileMenuSlice.actions;

export default mobileMenuSlice;
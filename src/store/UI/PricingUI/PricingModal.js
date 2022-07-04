import {createSlice} from '@reduxjs/toolkit'

const pricingUISlice = createSlice({
    name: 'pricingUI',
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

export const pricingUIActions = pricingUISlice.actions;

export default pricingUISlice;
import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        username: '',
        firstName: '',
        lastName: ''
    },
    reducers: {
        setUsername(state, action) {
            const user = action.payload
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;
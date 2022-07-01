import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState:{
        firstName: null,
        lastName: null,
        role: null,
        avatar: null
    },
    reducers: {
        setFirstName(state, action) {
            state.firstName = action.payload
        },
        setLastName(state, action) {
            state.lastName = action.payload
        },
        setRole(state, action) {
            state.role = action.payload
        },
        setAvatar(state, action){
            state.avatar = action.payload
        } 
    }
})

export const authActions = authSlice.actions;

export default authSlice;
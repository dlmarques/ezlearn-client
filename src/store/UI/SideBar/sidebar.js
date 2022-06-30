import {createSlice} from '@reduxjs/toolkit'

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isOpened: false,
    },
    reducers: {
        openSidebar(state) {
            state.isOpened = false
        },
        closeSidebar(state) {
            state.isOpened = true
        }
    }
})

export const sidebarActions = sidebarSlice.actions;

export default sidebarSlice;
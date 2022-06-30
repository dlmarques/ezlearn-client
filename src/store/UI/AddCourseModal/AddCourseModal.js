import {createSlice} from '@reduxjs/toolkit'

const AddCourseModalSlice = createSlice({
    name: 'addCourseModal',
    initialState: {
        addCourseModalIsVisible: false
    },
    reducers: {
        openAddCourseModal(state) {
            state.addCourseModalIsVisible = true
        },
        closeAddCourseModal(state) {
            state.addCourseModalIsVisible = false
        }
    }
})

export const addCourseModalActions = AddCourseModalSlice.actions;

export default AddCourseModalSlice;
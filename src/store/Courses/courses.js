import {createSlice} from '@reduxjs/toolkit'

const coursesSlice = createSlice({
    name: 'courses',
    initialState: {
        courses: [],
    },
    reducers: {
        addCourse(state, action) {
            const newCourse = action.payload;
            state.courses.push({
                id: newCourse.id,
                courseName: newCourse.courseName,
                duration: newCourse.duration,
                image: newCourse.image
            })
        },
        removeCourse() {}
    }
})

export const coursesActions = coursesSlice.actions;

export default coursesSlice;
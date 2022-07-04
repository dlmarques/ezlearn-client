import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth';
import coursesSlice from './Courses/courses';
import AddCourseModalSlice from './UI/AddCourseModal/AddCourseModal';
import changeProfileModalSlice from './UI/ChangeProfileModal/ChangeProfileModal';
import loginModalSlice from './UI/LoginModal/LoginUI';
import mobileMenuSlice from './UI/MobileMenu/MobileMenuUI';
import registerModalSlice from './UI/RegisterModal/RegisterUI';
import resetPasswordModalSlice from './UI/ResetPasswordModal/ResetPasswordSlice';
import sidebarSlice from './UI/SideBar/sidebar';
import uploadUISlice from './UI/UploadModal/uploadfile';
import profileUISlice from './UI/ProfileModal/ProfileModal';
import pricingUISlice from './UI/PricingUI/PricingModal';


const store  = configureStore({
    reducer: {
        loginUI: loginModalSlice.reducer,
        registerUI: registerModalSlice.reducer,
        resetUI: resetPasswordModalSlice.reducer,
        mobileMenuUI: mobileMenuSlice.reducer,
        sidebarUI: sidebarSlice.reducer,
        changeProfileUI: changeProfileModalSlice.reducer,
        addCourseUI: AddCourseModalSlice.reducer,
        uploadUI: uploadUISlice.reducer,
        profileUI: profileUISlice.reducer,
        pricingUI: pricingUISlice.reducer,
        courses: coursesSlice.reducer,
        auth: authSlice.reducer
    }
})

export default store;
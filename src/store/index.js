import { configureStore } from '@reduxjs/toolkit'
import loginModalSlice from './UI/LoginModal/LoginUI';
import mobileMenuSlice from './UI/MobileMenu/MobileMenuUI';
import registerModalSlice from './UI/RegisterModal/RegisterUI';
import resetPasswordModalSlice from './UI/ResetPasswordModal/ResetPasswordSlice';

const store  = configureStore({
    reducer: {
        loginUI: loginModalSlice.reducer,
        registerUI: registerModalSlice.reducer,
        resetUI: resetPasswordModalSlice.reducer,
        mobileMenuUI: mobileMenuSlice.reducer,
    }
})

export default store;
import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../features/homepage/homepageSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
    reducer: {
        homepage: homepageReducer,
        user: userReducer,
    },
});

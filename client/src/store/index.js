import {configureStore} from '@reduxjs/toolkit'
import coursesReducers from "./slices/coursesSlice";
export default configureStore({
    reducer: {
        courses: coursesReducers,

    }
});


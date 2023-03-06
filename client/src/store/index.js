import {configureStore} from '@reduxjs/toolkit'
import coursesReducers from "./slices/coursesSlice";
import materialsReducers from "./slices/materialsSlice";
export default configureStore({
    reducer: {
        courses: coursesReducers,
        materials: materialsReducers
    }
});


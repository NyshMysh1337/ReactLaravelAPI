import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    courses: [],
    // coursesOne: {},
    status: null,
    error: null
}

export const fetchCourses = createAsyncThunk(
    'courses/fetchCourses',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/courses', {
                headers: { "Accept": "application/json" }
            })
            if(!response.ok) {
                throw new Error('ServerError');
            }
            const responseJson = await response.json()
            return responseJson;
        } catch (error) {
            return rejectWithValue(error.message);
        }
        
    }
);

export const deleteCourses = createAsyncThunk(
    'courses/deleteCourses',
    async function(id, {rejectWithValue, dispatch}) {
        try{
            const response = await fetch(`http://127.0.0.1:8000/api/courses/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Can\'t delete courses. Server error!');
            }

            dispatch(removeCourses({id}))

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const deleteMaterial = createAsyncThunk(
    'courses/deleteMaterial',
    async function(id, {rejectWithValue}) {
        try{
            const response = await fetch(`http://127.0.0.1:8000/api/material/destroy/${id}`, {
                method: 'DELETE'
            })

            if (!response.ok) {
                throw new Error('Can\'t delete courses. Server error!');
            }

        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const addCourses = createAsyncThunk(
    'courses/addCourses',
    async function(courses, {rejectWithValue, dispatch}) {
        try{
            const response = await fetch('http://127.0.0.1:8000/api/courses', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(courses)
            })

            if (!response.ok) {
                throw new Error('Can\'t add courses. Server error!');
            }

            const data = await response.json();

            dispatch(createCourses(data));
            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const upDateCourses = createAsyncThunk(
    'courses/upDateCourses',
    async function(courses, {rejectWithValue, dispatch}) {
        try{
            const response = await fetch(`http://127.0.0.1:8000/api/courses/${courses.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(courses.data)
            })

            if (!response.ok) {
                throw new Error('Can\'t add courses. Server error!');
            }

            const data = await response.json();

            return data
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)




const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const coursesSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        createCourses: (state, action) => {
            state.courses.push(action.payload);
            },
        // getCourses: (state, action) => {
        //     // console.log(action.payload)
        //   state.coursesOne = state.courses.find(el => el.id == action.payload)
        // },
        removeCourses: (state, action) => {
            state.courses = state.courses.filter(el => {
                return el.id !== action.payload.id
            })
        }
    },
    extraReducers: {
        [fetchCourses.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchCourses.fulfilled]: (state, action) => {
            state.courses = action.payload.data
            state.status = 'resolved'
        },
        [fetchCourses.rejected]: setError,
        [deleteCourses.rejected]: setError,
        [deleteMaterial.rejected]: setError,
        [upDateCourses.rejected]: setError,
    }
});

export const {removeCourses, createCourses} = coursesSlice.actions
export default coursesSlice.reducer;
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    courses: [],
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

export const addCourses = createAsyncThunk(
    'courses/addCourses',
    async function(post, {rejectWithValue, dispatch}) {
        try{
            const response = await fetch('http://127.0.0.1:8000/api/courses', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(post.courses)
            })

            if (!response.ok) {
                throw new Error('Can\'t add courses. Server error!');
            }

            // for (let i = 0; i < post.courses.materials.length; i++) {
            //     post.formData.append('courses_id', data.id);
            //     post.formData.append('material', post.courses.materials[i]);
            // }

            const data = await response.json();

            const postMaterial = {
                post,
                id: data.id
            }

            // dispatch(addMaterials(postMaterial))
            dispatch(createCourses(data));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

// export const addMaterials = createAsyncThunk(
//     'courses/addMaterials',
//     async function({data, formData, id}, {rejectWithValue}) {
//         try {
//             for (let i = 0; i < data.materials.length; i++) {
//                 formData.append('courses_id', id);
//                 formData.append('material', data.materials[i]);
//                 const response = await fetch('http://127.0.0.1:8000/api/material/create', {
//                     method: 'POST',
//                     body: formData
//                 })
//
//                 if (!response.ok) {
//                     throw new Error('Can\'t add courses. Server error!');
//                 }
//             }
//         } catch (error) {
//             return rejectWithValue(error.message)
//         }
//
//     }
// )

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
    }
});

const {removeCourses, createCourses} = coursesSlice.actions
export default coursesSlice.reducer;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: null,
    error: null
}

export const updateMaterial = createAsyncThunk(
    'material/updateMaterial',
    async function (material, {rejectWithValue}) {

        try {
                const response = fetch(`http://127.0.0.1:8000/api/material/update/${material.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(material.data)
                })

            if (!response.ok) {
                throw new Error('Can\'t add material. Server error!');
            }
            await response.json();
        } catch (e) {
            return(rejectWithValue(e.message));
        }
    }
)

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

const setError = (state, action) => {
    state.status = 'rejected'
    state.error = action.payload
}

const materialsSlice = createSlice({
    name: 'material',
    initialState,
    extraReducers: {
        [updateMaterial.rejected]: setError,
        [deleteMaterial.rejected]: setError,
    }
})

export default materialsSlice.reducer;
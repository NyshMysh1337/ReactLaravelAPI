import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCourses} from "../store/slices/coursesSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from "./FormComponent";

const FormCreate = () => {

    const dispatch = useDispatch();
    const postForm = async (data) => {
        const formData = new FormData();

        const addingCourses = await dispatch(addCourses(data));
        const {id} = addingCourses.payload.data;

        for (let i = 0; i < data.materials.length; i++) {
            formData.append('courses_id', id);
            formData.append('name', data.name);
            formData.append('material', data.materials[i]);
            await fetch('http://127.0.0.1:8000/api/material/create', {
                method: 'POST',
                body: formData
            })
        }
    }

    return (
        <>
            <FormComponent postForm={postForm}/>
        </>
    );
};

export default FormCreate;
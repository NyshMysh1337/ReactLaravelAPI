import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {upDateCourses} from "../store/slices/coursesSlice";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {deleteMaterial, updateMaterial} from "../store/slices/materialsSlice";
import FormComponent from "./FormComponent";
import Material from "./Material";
import MaterialList from "./MaterialList";

const FormUpdate = () => {

    const {id} = useParams();
    const [course, setCourse] = useState(null);
    const dispatch = useDispatch();

    const removeMaterial = async (id) => {
       await dispatch(deleteMaterial(id));
       window.location.reload();
    }

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/courses/${id}`)
            .then(res => res.json())
            .then(res => setCourse(res.data));
    }, [id, dispatch])


    const updateForm = async (data) => {

        const upDateCourse = {
            data,
            id
        }

        await dispatch(upDateCourses(upDateCourse));

    if(data.materials.length > 0) {
        const formData = new FormData();

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
    }

    return (
        <div>
        {
        course ? (
            <div  className={'form-content'}>
                <FormComponent postForm={updateForm} course={course}/>
            <div>
                {
                    course.materials.length > 0 ?
                        <MaterialList course={course} />
                    // course.materials.map(el => {
                    // return (<div key={el.id}>
                    //             <img style={{width: 200}} src={require(`./../../../server/public/storage/${el.material}`)}/>
                    //             <button onClick={() => removeMaterial(el.id)}>delete</button>
                    //             <input type="text" defaultValue={el.name} name={'name'}/>
                    //         </div>)
                // })
                : ''
                }
            </div>

            </div>)
            : <h1>Loading...</h1>
}
        </div>

    );
};

export default FormUpdate;
import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {upDateCourses} from "../store/slices/coursesSlice";
import {useForm} from "react-hook-form";
import {useNavigate, useParams} from "react-router-dom";
import {deleteMaterial, updateMaterial} from "../store/slices/materialsSlice";
import FormComponent from "./FormComponent";
import Material from "./Material";
import MaterialList from "./MaterialList";
import {Spinner} from "react-bootstrap";
import MyButton from "./UI/MyButton/MyButton";

const FormUpdate = () => {

    const {id} = useParams();
    const [course, setCourse] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/courses/${id}`)
            .then(res => res.json())
            .then(res => setCourse(res.data));
    }, [id, dispatch])


    const removeMaterial = async (id) => {
        await dispatch(deleteMaterial(id));
        window.location.reload();
    }

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

    navigate(-1);
    }

    const upDateMaterial = () => {

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
                        // <MaterialList course={course} />
                    course.materials.map(el => {

                    return (<form className='materials-card' key={el.id}>
                            <img alt={'Тут находяться ваши материалы'} style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                            <MyButton isDelete={true} onClick={() => removeMaterial(el.id)}>&times;</MyButton>
                            <label className='input-name'>
                            Имя файла:<br/>
                            <input type="text" defaultValue={el.name} name={'name'}/>
                        </label>
                    </form>)
                    })
                : ''
                }
            </div>

            </div>)
            : <div style={{marginTop: 80}}>
                <Spinner animation="border" role="status">
                    <span className='visually-hidden'>Loading...</span>
                </Spinner>
            </div>
}
        </div>

    );
};

export default FormUpdate;
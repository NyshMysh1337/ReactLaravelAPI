import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {upDateCourses} from "../store/slices/coursesSlice";
import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {deleteMaterial, updateMaterial} from "../store/slices/materialsSlice";

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
        const formData = new FormData();

        const upDateCourse = {
            data,
            id
        }

        await dispatch(upDateCourses(upDateCourse));


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

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm();

    return (
        <div>
        {
        course ? (
            <div  className={'form-content'}>
    <form onSubmit={handleSubmit(updateForm)} encType="multipart/form-data">
        <div>
            <label>
                Заголовок:
                <br/>
                <input
                    defaultValue={course.title}
                    className="form-content-input"
                    {...register('title', {
                        required: "Это поле обязательно для заполнения!",
                        minLength: {
                            value: 10,
                            message: "Заголовок должен содержать минимум 10 символов"
                        }
                    })}
                />
            </label>
            <div style={{height: 40}}>
                {errors?.title &&
                    <p style={{color: 'red'}}>{errors?.title?.message || "Error!"}</p>
                }
            </div>
        </div>

        <div>
            <label>
                Описание:
                <br/>
                <textarea
                    defaultValue={course.description}
                    {...register('description', {
                        required: "Это поле обязательно для заполнения!",
                        minLength: {
                            value: 20,
                            message: "Описание должен содержать минимум 20 символов"
                        }
                    })}
                />
            </label>
            <div style={{height: 40}}>
                {errors?.description &&
                    <p style={{color: 'red'}}>{errors?.description?.message || "Error!"}</p>
                }
            </div>
        </div>

        <div>
            <label>
                Количество часов:
                <br/>
                <input
                    defaultValue={course.duration_h}
                    className="form-content-input hours"
                    type={'number'}
                    {...register('duration_h', {
                        required: "Это поле обязательно для заполнения!",
                    })}
                />
            </label>
            <div style={{height: 40}}>
                {errors?.duration_h &&
                    <p style={{color: 'red'}}>{errors?.duration_h?.message || "Error!"}</p>
                }
            </div>
        </div>


        <div>
            <label>
                Ссылка на видеоматериалы:
                <br/>
                <input
                    defaultValue={course.hyper_link}
                    className="form-content-input"
                    {...register('hyper_link', {
                        required: "Это поле обязательно для заполнения!",
                    })}
                />
            </label>
            <div style={{height: 40}}>
                {errors?.hyper_link &&
                    <p style={{color: 'red'}}>{errors?.hyper_link?.message || "Error!"}</p>
                }
            </div>
        </div>

        <div>
            <label>
                Имя файла/файлов:
                <br/>
                <input
                    className="form-content-input"
                    {...register('name', {
                        // required: "Это поле обязательно для заполнения!",
                        minLength: {
                            value: 5,
                            message: "Имя для файла/файлов должено быть минимум 5 символов"
                        }
                    })}
                />
            </label>
        </div>

        <div>
            <label>
                Материалы:
                <br/>
                <input
                    type={'file'}
                    multiple
                    name='materials'
                    {...register('materials')}
                />
            </label>
        </div>

        <input type="submit"/>
    </form>
            <div>
                {
                    course.materials.length > 0 ?
                    course.materials.map(el => {
                    return (<div key={el.id}>
                            <img style={{width: 200}} src={require(`./../../../server/public/storage/${el.material}`)}/>
                            <button onClick={() => removeMaterial(el.id)}>delete</button>
                            <input type="text" defaultValue={el.name} name={'name'}/>

                    </div>)
                }) : ''
                }
            </div>

            </div>)
            : <h1>Loading...</h1>

}
        </div>

    );
};

export default FormUpdate;
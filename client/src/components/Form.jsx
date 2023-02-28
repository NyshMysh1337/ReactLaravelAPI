import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCourses} from "../store/slices/coursesSlice";

const Form = () => {

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

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm();

    return (
        <form onSubmit={handleSubmit(postForm)} encType="multipart/form-data">
            <label>
                Title:
                <input
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

            <label>
                Описание:
                <textarea
                    {...register('description', {
                        required: "Это поле обязательно для заполнения!",
                        minLength: {
                            value: 20,
                            message: "Описание должен содержать минимум 20 символов"
                        }
                    })}
                ></textarea>
            </label>
            <div style={{height: 40}}>
                {errors?.description &&
                    <p style={{color: 'red'}}>{errors?.description?.message || "Error!"}</p>
                }
            </div>

            <label>
                Количество часов:
                <input
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

            <label>
                Ссылка на видеоматериалы:
                <input
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

            <label>
                Имя файла/файлов:
                <input
                    {...register('name', {
                        required: "Это поле обязательно для заполнения!",
                        minLength: {
                            value: 5,
                            message: "Имя для файла/файлов должено быть минимум 5 символов"
                        }
                    })}
                />
            </label>

            <label>
                Материалы:
                <input
                    type={'file'}
                    multiple
                    name='materials'
                    {...register('materials')}
                />
            </label>

            <input type="submit" />
        </form>
    );
};

export default Form;
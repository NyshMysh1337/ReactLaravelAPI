import React from 'react';
import {useForm} from "react-hook-form";

const FormComponent = ({postForm, course}) => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm();


    return (
        <form onSubmit={handleSubmit(postForm)} encType="multipart/form-data">
            <div className='form-content'>
                <label>
                    Заголовок:
                    <br/>
                    <input
                        defaultValue={course ? course.title : ''}
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
                        defaultValue={course ? course.description : ''}
                        {...register('description', {
                            required: "Это поле обязательно для заполнения!",
                            minLength: {
                                value: 20,
                                message: "Описание должен содержать минимум 20 символов"
                            }
                        })}
                    >
                    </textarea>
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
                        defaultValue={course ? course.duration_h : ''}
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
                        defaultValue={course ? course.hyper_link : ''}
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
                            required: "Это поле обязательно для заполнения!",
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

            <input type="submit" />
        </form>
    );
};

export default FormComponent;
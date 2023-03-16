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
        <form className='form-courses' onSubmit={handleSubmit(postForm)} encType="multipart/form-data">
            <div className='form-content'>
                    <input
                        type='text'
                        placeholder='Название курса'
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
                <div style={{height: 40}}>
                    {errors?.title &&
                        <p style={{color: 'red'}}>{errors?.title?.message || "Error!"}</p>
                    }
                </div>
            </div>

            <div>
                    <br/>
                    <textarea
                        placeholder='Описание курса'
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
                <div style={{height: 40}}>
                    {errors?.description &&
                        <p style={{color: 'red'}}>{errors?.description?.message || "Error!"}</p>
                    }
                </div>
            </div>

            <div>
                <label>
                    Срок обучения в часах
                    <br/>
                    <input
                        defaultValue={course ? course.duration_h : ''}
                        className="form-content-input hours"
                        type='number'
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
                    <input
                        type='text'
                        placeholder='Ссылка на видеоматериалы'
                        defaultValue={course ? course.hyper_link : ''}
                        className="form-content-input"
                        {...register('hyper_link', {
                            required: "Это поле обязательно для заполнения!",
                        })}
                    />
                <div style={{height: 40}}>
                    {errors?.hyper_link &&
                        <p style={{color: 'red'}}>{errors?.hyper_link?.message || "Error!"}</p>
                    }
                </div>
            </div>
            <hr/>

            <div>
                Материалы
                <br/>
                    <input
                        type='text'
                        placeholder='Имя материала/материалов:'
                        className="form-content-input"
                        {...register('name', {
                            required: "Это поле обязательно для заполнения!",
                            minLength: {
                                value: 5,
                                message: "Имя для файла/файлов должено быть минимум 5 символов"
                            }
                        })}
                    />
            </div>

            <div style={{marginTop:10}}>
                    <input
                        className='form-content-input'
                        type={'file'}
                        multiple
                        name='materials'
                        {...register('materials')}
                    />
            </div>

            <input type="submit" />
        </form>
    );
};

export default FormComponent;
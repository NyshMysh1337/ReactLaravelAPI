import React, {useRef} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addCourses} from "../store/slices/coursesSlice";

const Form = () => {

    const dispatch = useDispatch();

    const fileComponent = useRef();



    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        mode: 'onBlur'
    });
    const postForm = (data) => {
        // console.log(fileComponent.current.files)
        dispatch(addCourses(data));
    }

    // const [file, setFile] = useState(null);


    // const handleClick = (e) => {
    //     setFile(e.target.files);
    //     console.log(file)
    // }

    return (
        <form onSubmit={handleSubmit(postForm)}>
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

            {/*<label>*/}
            {/*    Материалы:*/}
            {/*    <input*/}
            {/*        type={'file'}*/}
            {/*        multiple*/}
            {/*        // ref={fileComponent}*/}
            {/*        {...register('materials', {*/}
            {/*            required: "Это поле обязательно для заполнения!",*/}
            {/*        })}*/}
            {/*    />*/}
            {/*</label>*/}
            {/*<div style={{height: 40}}>*/}
            {/*    {errors?.materials &&*/}
            {/*        <p style={{color: 'red'}}>{errors?.materials?.message || "Error!"}</p>*/}
            {/*    }*/}
            {/*</div>*/}

            <input type="submit" />
        </form>
    );
};

export default Form;
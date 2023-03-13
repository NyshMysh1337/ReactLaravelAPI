import React from 'react';
import {useForm} from "react-hook-form";
import MyButton from "./UI/MyButton/MyButton";

const FormUpdateMaterial = ({upDateMaterialSubmit, removeMaterial, el}) => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm();

    return (
        <form className='materials-card' key={el.id} onSubmit={handleSubmit(data => upDateMaterialSubmit(data, el.id))}>
                <img alt={'Тут находяться ваши материалы'} style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                <MyButton isDelete={true} onClick={() => removeMaterial(el.id)}>&times;</MyButton>
                <label className='input-name'>
                    Имя файла:<br/>
                    <input type="text"
                           defaultValue={el.name}
                           {...register('name', {
                               required: "Это поле обязательно для заполнения!",
                               minLength: {
                                   value: 5,
                                   message: "Описание должен содержать минимум 5 символов"
                               }
                           })}
                    />
                </label>
                <div style={{height: 40}}>
                    {errors?.name &&
                        <p style={{color: 'red'}}>{errors?.name?.message || "Error!"}</p>
                    }
                </div>
                <input type='submit'/>
        </form>
    );
};

export default FormUpdateMaterial;
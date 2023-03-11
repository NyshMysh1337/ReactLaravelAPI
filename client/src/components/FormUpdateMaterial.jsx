import React from 'react';
import {useForm} from "react-hook-form";
import MyButton from "./UI/MyButton/MyButton";

const FormUpdateMaterial = ({updateMaterial, removeMaterial}) => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm();

    return (
        <form onSubmit={handleSubmit(updateMaterial)}>
            <form className='materials-card' key={el.id}>
                <img alt={'Тут находяться ваши материалы'} style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                <MyButton isDelete={true} onClick={() => removeMaterial(el.id)}>&times;</MyButton>
                <label className='input-name'>
                    Имя файла:<br/>
                    <input type="text" defaultValue={el.name} name={'name'}/>
                </label>
            </form>
        </form>
    );
};

export default FormUpdateMaterial;
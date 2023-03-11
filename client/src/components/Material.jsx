import React from 'react';
import {deleteMaterial} from "../store/slices/materialsSlice";
import {useDispatch} from "react-redux";
import MyButton from "./UI/MyButton/MyButton";

const Material = ({course, isUpdate}) => {

    const dispatch = useDispatch();
    const removeMaterial = async (id) => {
        await dispatch(deleteMaterial(id));
        window.location.reload();
    }

    return (
        <>
            {
                isUpdate ? (
                    course.map(el => {
                        return <div className='materials-card' key={el.id}>
                            <img alt={'Тут находяться ваши материалы'} style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                            <MyButton isDelete={true} onClick={() => removeMaterial(el.id)}>&times;</MyButton>
                            <label className='input-name'>
                                Имя файла:<br/>
                                <input type="text" defaultValue={el.name} name={'name'}/>
                            </label>
                        </div>
                    })
                ) : (
                    course.map(el => {
                        return <div className='materials-card' key={el.id}>
                            <img alt={'Тут находяться ваши материалы'} style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                            <div className='link-download'>
                                <a href={require(`./../../../server/public/storage/${el.material}`)} download>Скачать</a>
                            </div>
                            <span style={{marginTop: 10}}>Имя файла: {el.name}</span>
                        </div>
                    })
                )
            }
        </>
    );
};

export default Material;
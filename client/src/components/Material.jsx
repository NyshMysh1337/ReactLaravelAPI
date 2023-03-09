import React from 'react';
import {deleteMaterial} from "../store/slices/materialsSlice";
import {useDispatch} from "react-redux";

const Material = ({course, isUpdate}) => {

    const dispatch = useDispatch();
    const removeMaterial = async (id) => {
        await dispatch(deleteMaterial(id));
        window.location.reload();
    }

    console.log(123);

    return (
        <>
            {
                isUpdate ? (
                    course.map(el => {
                        return <div key={el.id}>
                            <img style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                            <button onClick={() => removeMaterial(el.id)}>delete</button>
                            <input type="text" defaultValue={el.name} name={'name'}/>
                        </div>
                    })
                ) : (
                    course.map(el => {
                        return <div key={el.id}>
                            <img style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                            <a href={require(`./../../../server/public/storage/${el.material}`)} download>Скачать</a>
                            {el.name}
                        </div>
                    })
                )
            }
        </>
    );
};

export default Material;
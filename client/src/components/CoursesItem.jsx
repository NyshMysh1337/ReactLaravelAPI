import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCourses} from "../store/slices/coursesSlice";
import MyLink from "./UI/MyLink/MyLink";
import MyButton from "./UI/MyButton/MyButton";

const CoursesItem = ({title, id}) => {

    const dispatch = useDispatch();

    const removeCourses = (id) => {
        let result = window.confirm("Вы точно хотите удалить?");
        if(result) {
            dispatch(deleteCourses(id))
        }
    }

    return (
        <div>
            <div className="courses">
                <div className="courses_content">
                    <span>{id}. {title}</span>
                </div>

                <div className="courses_btn">
                    <div className={'courses_btn_content'}>
                        <MyLink way={`/show/${id}`}>show</MyLink>
                    </div>
                    <div className={'courses_btn_content'}>
                        <MyLink way={`/edit/${id}`}>edit</MyLink>
                    </div>
                    <div className={'courses_btn_content'}>
                        <MyButton isDelete={true} onClick={() => removeCourses(id)}>&times;</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesItem;
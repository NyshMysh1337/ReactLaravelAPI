import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCourses} from "../store/slices/coursesSlice";
import {Link} from "react-router-dom";

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
                    <Link to={`/show/${id}`}>show</Link>
                    <button>edit</button>
                    <button onClick={() => removeCourses(id)}>delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoursesItem;
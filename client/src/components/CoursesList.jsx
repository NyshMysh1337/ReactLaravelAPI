import React from 'react';
import CoursesItem from "./CoursesItem";

const CoursesList = ({currentCourses}) => {
    return (
        <>
            {
                currentCourses.map(obj => {
                    return <CoursesItem key={obj.id} title={obj.title} id={obj.id}/>
                })
            }
        </>
    );
};

export default CoursesList;
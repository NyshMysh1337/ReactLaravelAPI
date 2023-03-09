import React from 'react';
import Material from "./Material";

const MaterialList = ({course}) => {
    return (
        <>
            {
                course.materials.map(el => {
                    return <Material key={el.id} course={course.materials} isUpdate={true}/>
                })
            }
        </>
    );
};

export default MaterialList;
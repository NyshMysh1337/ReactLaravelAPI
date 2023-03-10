import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Material from "../../components/Material";

const Show = () => {
    const {id} = useParams();

    const [course, setCourse] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/courses/${id}`)
            .then(res => res.json())
            .then(res => setCourse(res.data));
    }, [id])

    return (
        <div>
            <Link to={'/'}>Главная</Link>
                <div>
                    {
                        course
                            ?
                                <Material course={course.materials} />
                            :
                                <h1>Loading...</h1>
                    }
                </div>
        </div>
    );
};

export default Show;
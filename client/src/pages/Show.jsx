import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCourses} from "../store/slices/coursesSlice";

const Show = () => {
    const {id} = useParams();

    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/courses/${id}`)
            .then(res => res.json())
            .then(res => setCourse(res.data));
        // setLoading(false)
    }, [id])

    return (
        <div>
                <div>
                    {
                        course ?
                        course.materials.map(el => {
                            return <div key={el.id}>
                                <img style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                                <a href={require(`./../../../server/public/storage/${el.material}`)} download>Скачать</a>
                                {el.name}
                            </div>
                        })
                            : <h1>Loading...</h1>
                    }
                </div>
        </div>
    );
};

export default Show;
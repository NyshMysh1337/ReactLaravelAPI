import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Material from "../../components/Material";
import {Spinner} from "react-bootstrap";
import MyLink from "../../components/UI/MyLink/MyLink";
import style from './style.module.css'

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
            <MyLink way={'/'}>Главная</MyLink>
                <div>
                    {
                        course
                            ?
                                <div className={style.content}>
                                    <h1>{course.title}</h1>
                                    <p>Описание курса: {course.description}</p> <br/>
                                    <span style={{marginTop: 10}}>Срок обучения в часах: {course.duration_h}</span><br/>
                                    <span style={{marginTop: 10}}>Ссылка на <a href={course.hyper_link}>материалы</a></span>
                                    <div className={style.materials}>
                                        <Material course={course.materials} />
                                    </div>
                                </div>
                            :
                                <div style={{marginTop: 80}}>
                                    <Spinner animation="border" role="status">
                                        <span className='visually-hidden'>Loading...</span>
                                    </Spinner>
                                </div>
                    }
                </div>
        </div>
    );
};

export default Show;
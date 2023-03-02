import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
const Show = () => {
    const {id} = useParams();
    const [course, setCourse] = useState(null);
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/courses/${id}`)
            .then(res => res.json())
            .then(res => setCourse(res.data));
        // setLoading(false)
    }, [id])

    debugger
    console.log(course)

    return (
        <div>
            {course ? (
                <div>
                    {/*show: {course.id}*/}
                    {/*courses: {course.title}*/}

                    {
                        course.materials.map(el => {
                            return <>
                                <img style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                                {el.name}
                            </>
                        })
                    }
                </div>
            ) : <h1>Loading...</h1>}

        </div>
    );
};

export default Show;
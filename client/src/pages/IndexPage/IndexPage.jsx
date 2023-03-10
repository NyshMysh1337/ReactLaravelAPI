import React, {useEffect, useState} from 'react';
import Pagination from "../../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourses, sortCourse} from "../../store/slices/coursesSlice";
import {Link} from "react-router-dom";
import CoursesList from "../../components/CoursesList";
import style from './style.module.css'
import {Spinner} from "react-bootstrap";

const IndexPage = () => {

    const dispatch = useDispatch();
    const {courses, error, status} = useSelector(state => state.courses)
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(10);
    const [order, setOrder] = useState('ASC');

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch, coursesPerPage])

    const lastIndexCourses = currentPage * coursesPerPage;
    const firstCoursesIndex = lastIndexCourses - coursesPerPage;
    const currentCourses = courses.slice(firstCoursesIndex, lastIndexCourses);

     const sortBy = () => {
         if (order === 'ASC') {
         const sortCourses = [...courses].sort((a, b) => {
                 return a.title > b.title ? 1 : -1
             })
             dispatch(sortCourse(sortCourses))
             setOrder('DESC')
         }

         if (order === 'DESC') {
             const sortCourses = [...courses].sort((a, b) => {
                 return a.title < b.title ? 1 : -1
             })
             dispatch(sortCourse(sortCourses))
             setOrder('ASC')
         }
     }



    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <div className={style.header}>
                <Link  to={'/create'}>Создать пост</Link>

                <select onChange={(e) => setCoursesPerPage(e.target.value)}>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                </select>

                <div>
                    <span>Фильтрация </span> <button className={style.sortButton} onClick={sortBy}>По названию</button>
                </div>
            </div>

            <CoursesList currentCourses={currentCourses} />

            {status === 'loading' &&
                <div className={style.loadingSpinner}>
                    <Spinner animation="border" role="status">
                        <span className='visually-hidden'>Loading...</span>
                    </Spinner>
                </div>
            }
            {error && <h2 style={{color: 'red'}}>An error: {error}</h2>}

            <div className={style.paginate}>
                <Pagination
                    totalCourses={courses.length}
                    coursesPerPage={coursesPerPage}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default IndexPage;
import './styles/App.css';
import CoursesItem from "./components/CoursesItem";
import {useEffect, useState} from "react";
import {fetchCourses} from "./store/slices/coursesSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import Form from "./components/Form";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Pagination from "./components/Pagination";


function App() {

    const dispatch = useDispatch();
    const {courses, error, status} = useSelector(state => state.courses)
    const [currentPage, setCurrentPage] = useState(1);
    const [coursesPerPage, setCoursesPerPage] = useState(10);

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch, coursesPerPage])

    const lastIndexCourses = currentPage * coursesPerPage;
    const firstCoursesIndex = lastIndexCourses - coursesPerPage;
    const currentCourses = courses.slice(firstCoursesIndex, lastIndexCourses);

    const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="App">

        {/*<button onClick={() => setCoursesPerPage(20)}>20</button>*/}

        <select onChange={(e) => setCoursesPerPage(e.target.value)}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
        </select>

        {/*<Routes>*/}
        {/*    <Route path={'/create'} element={<Create />}/>*/}
        {/*    <Route path={`/edit/id`} element={<Update />}/>*/}
        {/*    <Route path={`/`} element={<App />}/>*/}
        {/*</Routes>*/}

    <Form />

        {
            currentCourses.map((obj, i) => {
                return <CoursesItem key={i} title={obj.title} id={obj.id}/>
            })
        }

        <Pagination
            totalCourses={courses.length}
            coursesPerPage={coursesPerPage}
            paginate={paginate}
        />


        {status === 'loading' && <h2>Loading...</h2>}
        {error && <h2>An error: {error}</h2>}

    </div>
  );
}

export default App;

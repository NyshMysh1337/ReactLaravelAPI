import './styles/App.css';
import CoursesItem from "./components/CoursesItem";
import {useEffect} from "react";
import {fetchCourses} from "./store/slices/coursesSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import Form from "./components/Form";
import Mat from "./components/Mat";


function App() {

    const dispatch = useDispatch();
    const {courses, error, status} = useSelector(state => state.courses)

    useEffect(() => {
        dispatch(fetchCourses());
    }, [])



  return (
    <div className="App">

        {/*<Routes>*/}
        {/*    <Route path={'/create'} element={<Create />}/>*/}
        {/*    <Route path={`/edit/id`} element={<Update />}/>*/}
        {/*    <Route path={`/`} element={<App />}/>*/}
        {/*</Routes>*/}



    <Form />

        <div style={{margin: 20}}><Mat/></div>



        {
            courses.map(obj => {
                return <CoursesItem key={obj.id} title={obj.title} id={obj.id}/>
            })
        }

        {status === 'loading' && <h2>Loading...</h2>}
        {error && <h2>An error: {error}</h2>}

    </div>
  );
}

export default App;

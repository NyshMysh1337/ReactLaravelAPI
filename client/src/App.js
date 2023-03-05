import './styles/App.css';
import CoursesItem from "./components/CoursesItem";
import {useEffect, useState} from "react";
import {fetchCourses} from "./store/slices/coursesSlice";
import {useDispatch, useSelector} from "react-redux";
import {Link, Route, Routes} from "react-router-dom";
import Form from "./components/FormCreate";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Pagination from "./components/Pagination";
import IndexPage from "./pages/IndexPage";
import Show from "./pages/Show";


function App() {
  return (
    <div>
        <Routes>
            <Route path={'/create'} element={<Create />}/>
            <Route path={`/edit/:id`} element={<Update />}/>
            <Route path={`/show/:id`} element={<Show />}/>
            <Route path={`/`} element={<IndexPage />}/>
        </Routes>
    </div>
  );
}

export default App;

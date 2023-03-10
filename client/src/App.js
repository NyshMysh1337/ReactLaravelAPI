import './styles/App.css';
import {Link, Route, Routes} from "react-router-dom";
import Create from "./pages/Create/Create";
import Update from "./pages/Update/Update";
import IndexPage from "./pages/IndexPage/IndexPage";
import Show from "./pages/Show/Show";


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

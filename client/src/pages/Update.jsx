import React from 'react';
import FormUpdate from "../components/FormUpdate";
import {Link} from "react-router-dom";

const Update = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <FormUpdate />
        </div>
    );
};

export default Update;
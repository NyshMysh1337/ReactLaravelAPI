import React from 'react';
import Form from "../components/Form";
import {Link} from "react-router-dom";

const Create = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <Form />
        </div>
    );
};

export default Create;
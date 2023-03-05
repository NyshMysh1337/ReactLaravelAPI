import React from 'react';
import FormCreate from "../components/FormCreate";
import {Link} from "react-router-dom";

const Create = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <FormCreate />
        </div>
    );
};

export default Create;
import React from 'react';
import FormCreate from "../../components/FormCreate";
import {Link} from "react-router-dom";
import style from './style.module.css'

const Create = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <FormCreate />
        </div>
    );
};

export default Create;
import React from 'react';
import {Link} from "react-router-dom";
import style from './style.module.css';

const MyLink = ({way, children}) => {
    return (
            <Link className={style.linkForm} to={way}>{children}</Link>
    );
};

export default MyLink;
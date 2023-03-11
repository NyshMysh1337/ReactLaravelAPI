import React from 'react';
import style from './style.module.css'

const MyButton = ({children, onClick, isDelete}) => {
    return (
        <button className={isDelete ? style.deleteButton : style.standardButton} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;
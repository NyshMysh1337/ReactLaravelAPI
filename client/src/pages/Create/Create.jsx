import React from 'react';
import FormCreate from "../../components/FormCreate";
import MyLink from "../../components/UI/MyLink/MyLink";

const Create = () => {
    return (
        <div>
            <MyLink way={'/'}>Главная</MyLink>
            <FormCreate />
        </div>
    );
};

export default Create;
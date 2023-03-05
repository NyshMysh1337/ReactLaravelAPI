import React from 'react';

const Material = (course) => {
    return (
        <>
            {
                course.materials.map(el => {
                    return <div key={el.id}>
                        <img style={{width: 200}} src={require(`./../../../server/storage/app/public/${el.material}`)}/>
                        <a href={require(`./../../../server/public/storage/${el.material}`)} download>Скачать</a>
                        {el.name}
                    </div>
                })
            }
        </>
    );
};

export default Material;
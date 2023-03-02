import React from 'react';

const Pagination = ({totalCourses, coursesPerPage, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCourses / coursesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(page => {
                        return <li className={'page-item'} key={page}>
                            <a className="page-link" onClick={() => paginate(page)}>
                                {page}
                            </a>
                        </li>
                    })
                }
            </ul>
        </div>
    );
};

export default Pagination;
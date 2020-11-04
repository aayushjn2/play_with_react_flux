import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {toast} from 'react-toastify';
function CourseList(props) {
    return(
        <div>
            <table className = "table">
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Title</th>
                        <th>Author Id</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {props.courses.map(course => {
                        return (
                            <tr key = {course.id}>
                                <td>
                                    <button className="btn btn-outline-danger" onClick={() => {props.deleteCourse(course.id);toast.error("Course: "+course.title+" deleted.");}}>
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <Link to={"/course/" + course.slug}>{course.title}</Link>
                                </td>
                                <td>{course.authorId}</td>
                                <td>{course.category}</td>
                            </tr>
                        );
                    }) }
                </tbody>
            </table>
        </div>
    );
}

CourseList.protoTypes = {
    deleteCourse: PropTypes.func.isRequired,
    courses: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            authorId:PropTypes.string.isRequired,
            category: PropTypes.string.isRequired
        })
    ).isRequired
}

export default CourseList;
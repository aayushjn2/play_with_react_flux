import React from 'react';
import { getCourses } from '../api/courseApi';
class CoursesPage extends React.Component{
    state = {
        courses : []
    };
    componentDidMount(){
        //API Call from the server
        getCourses().then( (courses) => {
            //this.state.courses = courses; // don't do this 
            this.setState({courses : courses});
        });
    }
    render(){
        return (
            <>
                <h2>Courses</h2>;
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author Id</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.courses.map(course => {
                            return (
                                    <tr key = {course.id}>
                                        <td>{course.title}</td>
                                        <td>{course.authorId}</td>
                                        <td>{course.category}</td>
                                </tr>
                            );
                        }) }
                    </tbody>
                </table>
            </>
        );
    }
}

export default CoursesPage;
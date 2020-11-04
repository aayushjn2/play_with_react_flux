import React,{useState, useEffect} from 'react';
// import {Prompt} from 'react-router-dom';
import CourseForm from './CourseForm';
// import * as courseApi from '../api/courseApi';
import {toast} from 'react-toastify';
import courseStore from '../stores/courseStore';
// import { getCourseBySlug } from '../api/courseApi';
import * as courseActions from '../actions/courseActions';

const ManageCoursePage = props => {
    const [errors, setErrors] = useState({});
    const [courses, setCourses] = useState(courseStore.getCourses());
    const [course, setCourse] = useState({
        id : null,
        slug: "",
        title: "",
        authorId : null,
        category:"",
    });
    // function handleChange(event){
    //     // const updatedCourse = {...course};
    //     // updatedCourse.title =  event.target.value;
    //     //OR
    //     const updatedCourse = {...course, [event.target.name]: event.target.value }; //computed property
    //     setCourse(updatedCourse);
    // }
    //same working as above 

    useEffect( () => {
        courseStore.addChangeListener(onChange);
        const slug = props.match.params.slug; // from the path "/course/:slug"
        if(courses.length === 0){
            courseActions.loadCourses();
        }
        else if(slug){
            setCourse(courseStore.getCourseBySlug(slug));
        }
        return () => courseStore.removeChangeListener(onChange);
    },[courses.length, props.match.params.slug]);

    function onChange(){
        setCourses(courseStore.getCourses());
    }

    function handleChange({target}){
        setCourse({
            ...course,
            [target.name] : target.value
        });
    }

    function formIsValid(){
        const _errors = {};

        if(!course.title) _errors.title = "Title is required";
        if(!course.authorId) _errors.authorId = "Author ID is required";
        if(!course.category) _errors.category = "Category is required";
        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }
    
    function handleSubmit(event){
        event.preventDefault();
        if(!formIsValid()){
            return;
        }
        courseActions.saveCourse(course).then(()=>{
            props.history.push("/courses");
            toast.success("Course saved.");
        });
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm
                errors = {errors}
                course = {course}
                onChange={handleChange}
                onSubmit={handleSubmit}
                />
            {/* <Prompt when={true} message = "Are you sure you want to leave?"></Prompt> */}
            {/* {props.match.params.slug} */}
        </>
    );
};

export default ManageCoursePage;
import React, { useState, useEffect } from 'react'
import Course from './SingleCource'
import base_url from './../api/BootApi';
import axios from 'axios';
import { toast } from 'react-toastify';

const AllCourse = () => {

    useEffect(() => {
        document.title = "All Courses";
    }, []);


    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`).then(
            (response) => {
                console.log(response.data);
                setCourses(response.data);
                toast.success("Course Has Been Loaded", {
                    position: "bottom-right"
                }); 
            }, (error) => {
                console.log(error);
                toast.warning("Something Went Wrong");
            }
        );
    };

    //loading couse function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);

    const [courses, setCourses] = useState([])

    const removeCourseById=(id)=>
    {
        setCourses(courses.filter((c)=>c.id!=id));
    }


    return (

        <div>
            <h1>All Courses</h1>
            <p>List of Courses are as follows</p>
            {
                courses.length > 0 ? courses.map((item) => <Course key={item.id} course={item}  update={removeCourseById}/>) : "No Course"
            }
        </div>

    );
};

export default AllCourse;
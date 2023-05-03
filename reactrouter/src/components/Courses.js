import React from "react";
import {Outlet, NavLink} from "react-router-dom"

const Courses = () => {
    const courseList = ["React", "Angular", "Vue", "Nodejs"];
    const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)];

    return(
        <div>
            <h1>Courses List</h1>
            <p> Check your favorite Courses:</p>
            <ul>
                <li>ReactJS</li>
                <li>AngularJS</li>
                <li>View</li>
            </ul>

            <NavLink to={`/learn/courses/${randomCourseName}`}>{randomCourseName}</NavLink>
            <Outlet />
        </div>

    )
}

export default Courses
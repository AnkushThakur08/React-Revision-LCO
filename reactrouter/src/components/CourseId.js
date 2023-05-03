import React from 'react'
import {useParams, useNavigate} from "react-router-dom"

const CourseId = () => {
    const {courseId} = useParams();
    const navigate = useNavigate();
  return (
    <div>
        <h1>URL Params is : {courseId} </h1>
        <button 
        onClick={() => {
          navigate("/dashboard", {state: {courseId}})
        }}
        className='btn btn-danger'>Price</button>
    </div>
  )
}

export default CourseId
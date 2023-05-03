import React from 'react';
import {Link, Outlet} from "react-router-dom"

const Learn = () => {
    return(
        <div>
            <h1>Learn</h1>
            <p> All Courses are Listed Here:</p>
            <Link className='btn btn-success me-3' to="/learn/courses">Courses</Link>
            <Link className='btn btn-primary' to="/learn/bundles">Bundles</Link>
          <Outlet />
        </div>
    )
}

export default Learn;
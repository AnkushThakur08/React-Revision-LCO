import React from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from './components/Home';
import Learn from './components/Learn';
import Courses from './components/Courses';
import Bundles from './components/Bundles';
import CourseId from './components/CourseId';
import Dashboard from './components/Dashboard';

const App = () => {
  return(
    <Router>
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path ="/myapps" element ={ <Navigate replace to = "/learn"/>} />
        <Route path ="/learn" element ={<Learn />} > 
          <Route path="courses" element={<Courses/>} >
            <Route path=":courseId" element={<CourseId/>} />
            </Route>
          <Route path="bundles" element={<Bundles/>} />
        </Route>
        {/* <Route path="/dashboard" element={ <Dashboard />}  /> */}

      </Routes>

    </Router>
  )
 
}

export default App
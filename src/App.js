import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import Login from './components/SignUp-In/Login';
import Signup from './components/SignUp-In/Signup';
 import Forgot from './components/SignUp-In/Forgot';
//  import Layout from './Layout';
// import Metric from './components/Metric';
// import DashSummary from './components/Dashboard/DashSummary';
import Students from './components/Student/Students';
import Instructor from './components/Instructor/Instructor';
import Courses from './components/Course/Courses';
import InstructorForm from './components/Instructor/InstructorForm';

function App() {
  return (
    <div className="App">
    
    
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/instructors" element={<Instructor/>} />
        <Route path="/instructorform" element={<InstructorForm/>} />
       
    </Routes>
       
    </div>
  );
}

export default App;
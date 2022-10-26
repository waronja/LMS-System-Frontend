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
import CourseDetails from './components/Course/CourseDetails';
import Students from './components/Student/Students';
import Instructor from './components/Instructor/Instructor';

function App() {
  return (
    <div className="App">


       {/* <CourseDetails/> 
        <Layout/>
       <DashSummary/>
       <Layout/>
       <Metric/>
       <Metric/>
       <Metric/>
       <Login />
       <Signup />
       <Forgot />
       <Dashboard />
       <Users /> */}

    {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes> */}
    
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/users" element={<Users/>} />
        <Route path="/forgot" element={<Forgot/>} />
        <Route path="/courses" element={<CourseDetails/>} />
        <Route path="/students" element={<Students/>} />
        <Route path="/instructors" element={<Instructor/>} />
       
    </Routes>
       
    </div>
  );
}

export default App;

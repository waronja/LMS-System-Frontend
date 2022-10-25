import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/SignUp-In/Login';
import Signup from './components/SignUp-In/Signup';
import Forgot from './components/SignUp-In/Forgot';
import Layout from './components/Dashboard/Layout';
import Metric from './components/Metric';
import DashSummary from './components/Dashboard/DashSummary';
import CourseDetails from './components/Course/CourseDetails';

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
       <Forgot /> */}

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
       
    </div>
  );
}

export default App;

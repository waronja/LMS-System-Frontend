import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Layout from './components/Dashboard/Layout';
import Metric from './components/Metric';
import DashSummary from './components/Dashboard/DashSummary';
import CourseDetails from './components/Course/CourseDetails';

function App() {
  return (
    <div className="App">

       <CourseDetails/>
       <DashSummary/>
       <Layout/>
       <Metric/>
       <Metric/>
       <Metric/>
       <Login />
       <Signup />
       <Forgot />

        
       
    </div>
  );
}

export default App;

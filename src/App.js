import React from 'react';
//import { Route,Routes } from 'react-router-dom';
import './App.css';
import Instructor from './components/Instructor/Instructor'
// import Dashboard from './Pages/Dashboard';
// import Users from './Pages/Users';
// import Login from './components/SignUp-In/Login';
// import Signup from './components/SignUp-In/Signup';
// import Forgot from './components/SignUp-In/Forgot';
// import Layout from './Layout';
// import Metric from './components/Metric';
// import DashSummary from './components/Dashboard/DashSummary';
// import CourseDetails from './components/Course/CourseDetails';

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

       <Instructor/>

    {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
      </Route>
    </Routes> */}
       
    </div>
  );
}

export default App;

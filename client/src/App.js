import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Layout from './components/Dashboard/Layout';
import Metric from './components/Metric';
// import DashSummary from './components/Dashboard/DashSummary';

function App() {
  return (
    <div className="App">


      {/* <DashSummary/> */}
       <Layout/>
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

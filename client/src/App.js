import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';
import Layout from './components/Dashboard/Layout';
import Metric from './components/Metric';

function App() {
  return (
    <div className="App">

       <Layout/>
     
       <Login />
       <Signup />
       <Forgot />

         <Metric/>
       
    </div>
  );
}

export default App;

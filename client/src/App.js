import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Forgot from './components/Forgot';

function App() {
  return (
    <div className="App">
      
       <Login />
       <Signup />
       <Forgot />
    </div>
  );
}

export default App;

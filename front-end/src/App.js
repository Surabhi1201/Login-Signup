import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/login_component";
import Signup from "./Components/signup_component";
import Home from "./Components/home_component";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>  
  );
}

export default App;

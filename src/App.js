import React, { useState } from 'react'

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { Fragment } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link
} from "react-router-dom";


// import Color from './components/Color';
{/* <script src="https://code.jquery.com/jquery-3.6.4.js" integrity="sha256-a9jBBRygX1Bh5lt8GZjXDzyOB+bWve9EiO7tROUtj/E=" crossorigin="anonymous"></script> */}
function App() {
  const [mode, setmode] = useState('light');// Whether the dark mode is on or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setInterval(() => {
      setAlert(null);
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#224869";
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title="textUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}></Alert>
      <div className="container my-3" >
        <Routes>
        <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}/>
        {/* exact will do the exact matxching of the routes
          for example /users --> component 1
                      /users/home --> component 2
         */}
        <Route exact path='/about' element={<About mode={mode} />}/> 

        </Routes>
      </div>
    </BrowserRouter>
      {/* <Color /> */}
    </>
  );
}

export default App;

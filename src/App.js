import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether the dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'MyApp | Dark Mode'; // To change the title on web
      // setInterval(() => { // to set the notification on title to attract people BUT NOT GOOD 
      //   document.title = 'MyApp is Amazing'
      // }, 2000);

      // setInterval(() => { // to set the notification on title to attract people BUT NOT GOOD 
      //   document.title = 'Install MyApp Now!!!'
      // }, 1500);
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been disbaled", "success");
      // document.title = 'MyApp | Light Mode'; // To change the title on web
    }
  }

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          homeText="Home"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert}
              heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces"
              mode={mode}
              toggleMode={toggleMode} />} />
            <Route exact path="/About"
              element={<About mode={mode} toggleMode={toggleMode} />} />
            {/* <Route 
                exact path="/" 
                index 
                element={ 
                  <TextForm 
                   showAlert={showAlert}
                   heading="Try MyApp - Word Counter, Character Counter, Remove extra spaces"
                   mode={mode}
                   toggleMode={toggleMode}
                 />
               }
             /> */}
          </Routes>
        </div>
      </Router>


      {/* <Navbar title = "MyApp" aboutText = "About MyApp" /> */}
      {/* <Navbar/> */}
      {/* <Navbar title = "MyApp" mode={mode} toggleMode={toggleMode} />  */}
      {/* <Alert alert={alert} /> */}
      {/* <About/> */}
      {/* <div className="container my-3"> */}

      {/* <TextForm showAlert={showAlert} heading="Word Counter, Character Counter, Remove extra spaces" mode={mode}/> */}
      {/* <About aboutText = "About MyApp" mode={mode}/> */}
      {/* </div> */}


    </>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import Notestate from './context/notes/NoteState';
import Alert  from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';

export default function App(props) {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light'); 
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode==='light'){
     setMode('dark');
     document.body.style.backgroundColor = '#161c3b';
     showAlert("Dark mode has been enabled", "success")
   }
   else {
     setMode('light');
     document.body.style.backgroundColor = 'white';
     showAlert("Light mode has been enabled", "success")
   }
 }

  return (
    <>
      <Notestate>
        <Router>
          <Navbar  mode={mode} toggleMode={toggleMode}/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home mode={mode} showAlert={showAlert}/>} />
              <Route exact path="/login" element={<Login mode={mode} showAlert={showAlert}/>} />
              <Route exact path="/signup" element={<Signup mode={mode} showAlert={showAlert}/>} />
            </Routes>
          </div>
        </Router>
      </Notestate>
    </>
  );
}


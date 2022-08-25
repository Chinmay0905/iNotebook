import React from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Navbar = (props) => {
  let navigate = useNavigate()
  const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/login');
  }
  let location = useLocation();
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">iNotebook</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} to="/">Home</Link>
            </li>
          </ul>
          <div className={`form-check mx-2 form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
        </div>
         {!localStorage.getItem('token') ?  <form className="d-flex" >
            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
          </form> : <button onClick={handleLogout} className='btn btn-primary' >Logout</button>}
        </div>
      </div>
    </nav>
  )
}

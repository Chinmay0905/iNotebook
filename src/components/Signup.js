import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name, email, password} = credentials;
        const response = await fetch("https://myinotebook.netlify.app/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect 
            localStorage.setItem('token', json.authtoken);
            navigate("/");
           props.showAlert("Acccout created successfully", "success") 

        }
        else {
           props.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className='container mt-2'>
            <h2 className='my-3' style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Create an account to continue to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="name" className="form-label" style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Name</label>
                    <input type="text" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Email address</label>
                    <input type="email" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Password</label>
                    <input type="password" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} id="password" name="password" onChange={onChange} minLength={5} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label" style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Confirm Password</label>
                    <input type="password" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} id="cpassword" name="cpassword" onChange={onChange} minLength={5} required/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
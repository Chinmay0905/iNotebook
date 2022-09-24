import React, {useState} from 'react'
import { useNavigate} from 'react-router-dom'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""})
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password })
          });
          const json = await response.json()
          console.log(json);
          if (json.success){
            // Save the auth token and redirect 
            localStorage.setItem('token', json.authtoken);
            navigate("/");
           props.showAlert("Logged in successfully", "success") 
          }
          else {
            props.showAlert("Invalid details", "danger")

          }
    }
    
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className='mt-3'>
            <h2 style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Email address</label>
                    <input type="email" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{color: props.mode === 'dark' ? 'white' : '#161c3b' }}>Password</label>
                    <input type="password" name="password" className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#3d465d' : 'white', color: props.mode === 'dark' ? 'white' : '#161c3b' }} value={credentials.password} onChange={onChange} id="password"/>
                </div>
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login
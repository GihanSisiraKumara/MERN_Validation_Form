import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data === 'Success') {

                    navigate('/home');
                }
            })
            .catch(err => {
                console.log(err);
                if (err.response) {
                    console.log(err.response.data);
                } else {
                    console.log('Error:', err.message);
                }
            });
    };

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='Email'>Email:</label>
                        <input
                            type="text"
                            name="email"
                            className='form-control rounded-0'
                            placeholder='Enter your Email'
                            autoComplete='off'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Password'>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
                <p> Haven't an account?</p>
                <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>
                    Register
                </Link>
            </div>
        </div>
    );
}

export default Login;

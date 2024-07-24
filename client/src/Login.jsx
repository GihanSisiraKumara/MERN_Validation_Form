import React from 'react';

function Login() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h1>Login</h1>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='Email'>
                            Email:
                        </label>
                        <input
                            type="text"
                            name="email"
                            className='form-control rounded-0'
                            placeholder='Enter your name'
                            autoComplete='off' />

                    </div>
                    <div className='mb-3'>
                        <label htmlFor='Password'>
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder='Enter your password'
                            className='form-control rounded-0' />

                    </div>

                    <button type="submit" className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
            </div>












        </div>
    );
}
export default Login;
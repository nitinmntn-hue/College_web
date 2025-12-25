import React from 'react';
import '../assets/styles/Login.scss';

const Login = ({ header = 'Results', username = 'Enrollment No', password = 'Mobile No.', btn = 'View' }) => {
    return (
        <div className='login-container'>
            <h2 className='login-heading'>{header}</h2>
            <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor='username'>{username}:</label>
                    <input type='text' id='username' name='username' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>{password}:</label>
                    <input type='' id='password' name='password' required />
                </div>
                <button type='submit' className='btn btn-primary'>{btn}</button>

            </form>

        </div>
    )
};

export default Login;
import React from "react";
import "../Login/login.css"
import { useState } from 'react';
import { useHistory } from "react-router";
import { useLogin }  from '../../hooks/useLogin';


const Login = () => {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const {getData} = useLogin();
    const history = useHistory();


    
    const handleSubmit = async (e) => {
        e.preventDefault();
        await getData({userEmail, userPassword})
        await history.push('/');
    };


    return ( 
                <form className='box login p-5' onSubmit={handleSubmit} >
                <div className='field py-3'>
                    <p className='control'>
                    <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={userEmail}
                        placeholder='Email'
                        required
                    />
                    </p>
                </div>
            <div className='field py-3'>
                <p className='control'>
                <input
                    onChange={(e) => setUserPassword(e.target.value)}
                    value={userPassword}
                    placeholder='Password'
                    type='password'
                    required
                />
                </p>
            </div>
            <div className='field py-3'>
                <p className='control'>
                <button type='submit' className='btn btn-primary'>
                    Login
                </button>
                </p>
            </div>
            </form>
     );
}
 
export default Login;
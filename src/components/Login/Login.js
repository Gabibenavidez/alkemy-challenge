import {Button, Form} from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from "react-router";
import { useLogin }  from '../../hooks/useLogin';



const Login = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const {getData} = useLogin();


    
    const handleSubmit = (e) => {
        e.preventDefault();
        getData({userEmail, userPassword})
    };

    return (
       <Form onSubmit={handleSubmit}>
           <input
                placeholder="email"
                onChange={(e) => setUserEmail(e.target.value)}
                value={userEmail}
           />
           <input
                placeholder="password"
                onChange={(e) => setUserPassword(e.target.value)}
                value={userPassword}
           />
           <Button type="submit">Login</Button>
       </Form>
     );
}

 
export default Login;
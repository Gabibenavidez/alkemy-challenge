import React from "react";
import { useHistory } from "react-router";
import { useLogin } from "../../hooks/useLogin";
import { Button } from "react-bootstrap";
import "../Login/logout.css"

const Logout = () => {
    const {logout} = useLogin();
    const history = useHistory(); 

    
    return (
    <Button className="button btn btn-secondary " onClick={ () => {
        logout();
        history.push('/login');
        }}>Logout</Button>
    )
}
 
export default Logout;
import {useState, useContext, useCallback} from 'react';
import Context from '../context/userContext';
import axios from 'axios';


export const useLogin = () => {
    
    const {jwt, setJWT} = useContext(Context);


    const getData = useCallback(async ({userEmail, userPassword}) => {
        try{
            const  { token }  = await axios.post("http://challenge-react.alkemy.org/",
            {
                email : userEmail,
                password : userPassword
            }
            ).then(
                res => res.data);
            setJWT(token);
            localStorage.setItem('jwt', JSON.stringify(token));
        } catch (e) {
            console.error(e);
        }
    }, [setJWT]);

    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT]);

    console.log(jwt);
    return {
        isLogged: Boolean(jwt),
        getData,
        logout
    }    

};


import { useContext, useCallback} from 'react';
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
            alert('ya estas logeado')
        } catch (e) {
            alert(e);
        }
    }, [setJWT]);

    const logout = useCallback(() => {
        setJWT(null);
    }, [setJWT]);

    return {
        getData,
        logout
    }    

};


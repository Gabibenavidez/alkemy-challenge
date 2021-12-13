/*import Context from "../context/userContext"
import {useLogin} from "./useLogin"
import { useCallback, useContext } from "react";


export const useUser  = () => {
    const [  , getData] = useLogin();
    const {jwt, setJWT} = useContext(Context);

    const login = ({userEmail, userPassword}) => {
        getData({userEmail, userPassword});
        console.log(token);
    }
    
    
    const logout = useCallback(() => {
        setJWT(null)
    }, [setJWT]);

    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}*/
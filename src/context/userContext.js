import React, {useState, useEffect, createContext}  from 'react';


const Context = createContext({})

export function UserContextProvider ({children}) {
    const [jwt, setJWT] = useState(localStorage.getItem('jwt'));

    useEffect(() => {
        if (jwt) {
        localStorage.setItem('jwt', JSON.stringify(jwt));}
        else {
            localStorage.clear('jwt');
        }
    }, [jwt]);
    
    return <Context.Provider value={{jwt, setJWT}}>
        {children}
    </Context.Provider>
}

export default Context
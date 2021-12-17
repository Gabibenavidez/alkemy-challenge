import { useEffect, createContext, useReducer } from "react";
import appReducer from "./AppReducer";

var initialState = {
    selectedHeros: [] 
}

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {
    const selectedHeros = localStorage.getItem('selectedHeros');
    const [state, dispatch] = useReducer(appReducer, {selectedHeros : selectedHeros ? JSON.parse(selectedHeros) : initialState.selectedHeros});


    const addHero = (character) => {
        dispatch({type: 'ADD_HERO', payload: character})
    };

    const deleteHero = ({id}) => {
        dispatch({type: 'DELETE_HERO', payload: id})
    };

    useEffect(() => {
        localStorage.setItem('selectedHeros', JSON.stringify(state.selectedHeros)) 
    }, [state.selectedHeros])

    return (
    <GlobalContext.Provider value={{...state, addHero, deleteHero}}>
        {children}
    </GlobalContext.Provider>
    )
}
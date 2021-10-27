import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";

const initialState = {
    selectedHeros: [
        {
            id: "",
            name:"Example",
            image: {
                url:""
            },
            powerstats: {
                combat: "",
                durability: "",
                intelligence: "",
                power: "732",
                speed: "",
                strength: ""
            }
        }
    ]
}
export const GlobalContext = createContext(initialState);

export const ContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(appReducer, initialState)


    const addHero = (character) => {
        dispatch({type: 'ADD_HERO', payload: character})
    };
    const deleteHero = ({id}) => {
        dispatch({type: 'DELETE_HERO', payload: id})
    };


    return (
    <GlobalContext.Provider value={{...state, addHero, deleteHero}}>
        {children}
    </GlobalContext.Provider>
    )
}
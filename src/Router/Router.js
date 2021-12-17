import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Switch,
  useLocation,
  useHistory
} from "react-router-dom";
import { Route } from "react-router";
import Login from "../components/Login/Login";
import HerosTeam from "../components/HerosTeam/HerosTeam";
import Search from "../components/Search/Search";
import Characters from "../components/Characters/Characters";
import Context, { UserContextProvider } from "../context/userContext";
import { useGet } from "../hooks/useGet";
import Logout from "../components/Login/Logout";


const Router = () => {
    const [endpoint, setEndpoint] = useState();
    const [data, loading, error] = useGet(endpoint);
    const {jwt} = useContext(Context);
    const location = useLocation();
    const history = useHistory();
    console.log(location);

    const findCharacter = (character) => {
        setEndpoint(character);
      }

      useEffect(() => {
        if (!jwt && location.pathname != '/login') {
          alert('Debes logearte');
          return (
                history.push('/login')
          )}
      }, [location])

    return (
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/" exact >
                <Logout />
                <HerosTeam />
              </Route>
              <Route path="/search">
                <Logout />
                <Search findCharacter={findCharacter} />
              </Route>
              <Route path="/characters">
                <Logout />
                <Characters characters={data.results} />
              </Route>
            </Switch>
    ) 
}   


export default Router;
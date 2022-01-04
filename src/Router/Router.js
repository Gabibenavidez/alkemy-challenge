import React, { useContext, useState, useEffect } from "react";
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
import Context from "../context/userContext";
import { useGet } from "../hooks/useGet";
import NavBar from "../components/NavBar/NavBar";
import HeroDetail from "../components/HeroDetail/HeroDetail";


const Router = () => {
    const [endpoint, setEndpoint] = useState();
    const [data, loading, error] = useGet(endpoint);
    const [heroDetail, setHeroDetail] = useState();
    const {jwt} = useContext(Context);
    const location = useLocation();
    const history = useHistory();

    const findCharacter = (character) => {
        setEndpoint(character);
      }
    const detailHero = (hero) => {
        setHeroDetail(hero);
    }
      useEffect(() => {
        if (!jwt && location.pathname !== '/login') {
          alert('Debes logearte');
          return (
                history.push('/login')
          )}
      }, [location, history, jwt])

    return (
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/" exact >
                <NavBar />
                <HerosTeam detailHero={detailHero} />
              </Route>
              <Route path="/search">
                <NavBar />
                <Search findCharacter={findCharacter} />
              </Route>
              <Route path="/characters">
                <NavBar />
                <Characters characters={data.results} />
              </Route>
              <Route path="/detail">
                <NavBar />
                <HeroDetail hero={heroDetail} />
              </Route>
            </Switch>
    ) 
}   


export default Router;
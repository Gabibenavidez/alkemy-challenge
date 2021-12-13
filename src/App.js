import {Route, Switch} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import { useGet } from './hooks/useGet';
import Search from './components/Search/Search'
import { Button, Container } from 'react-bootstrap';
import Characters from '../src/components/Characters/Characters';
import HerosTeam from './components/HerosTeam/HerosTeam';
import { ContextProvider } from './context/GlobalContext';
import { UserContextProvider } from './context/userContext';
import { useUser }from './hooks/useUser';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';

const App = () => {
  const [endpoint, setEndpoint] = useState();
  const [data, loading, error] = useGet(endpoint);
  //const {isLogged, logout} = useUser();

  const findCharacter = (character) => {
    setEndpoint(character);
  }

  console.log(data);


  return (
      <UserContextProvider>
        <ContextProvider>
          <Container >
            <NavBar />
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/" exact>
                <HerosTeam />
              </Route>
              <Route path="/search">
                <Search findCharacter={findCharacter} />
              </Route>
              <Route path="/characters">
                <Characters characters={data.results} />
              </Route>
            </Switch>
          </Container>
        </ContextProvider>
      </UserContextProvider>
   )
  }
export default App;
          
        
      //  findCharacter={findCharacter} 
       //  characters={data.results} 
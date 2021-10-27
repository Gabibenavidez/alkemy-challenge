import {Route, Switch} from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import { useGet } from './hooks/useGet';
import Search from './components/Search/Search'
import { Container } from 'react-bootstrap';
import Characters from '../src/components/Characters/Characters';
import HerosTeam from './components/HerosTeam/HerosTeam';
import { ContextProvider } from './context/GlobalContext';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  const [endpoint, setEndpoint] = useState();
  const [data, loading, error] = useGet(endpoint);

  const findCharacter = (character) => {
    setEndpoint(character);
  }

  console.log(data);


  return (
    <ContextProvider>
      <Container >
        <NavBar />
        <Switch>
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
   )
  }
export default App;
          
        
      //  findCharacter={findCharacter} 
       //  characters={data.results} 
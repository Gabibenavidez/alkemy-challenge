import { useState } from 'react';
import './App.css';
import { useGet } from './hooks/useGet';
import Search from './components/Search/Search'
import { Container } from 'react-bootstrap';
import Characters from '../src/components/Characters/Characters';
import HerosTeam from './components/HerosTeam/HerosTeam';
import { ContextProvider } from './context/GlobalContext';

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
        <HerosTeam  />
        <Search findCharacter={findCharacter} />
        <Characters characters={data.results} />
      </Container>
    </ContextProvider>
   )
  }
export default App;

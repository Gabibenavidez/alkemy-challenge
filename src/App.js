
import './App.css';
import {Container } from 'react-bootstrap';
import { ContextProvider } from './context/GlobalContext';
import Router from './Router/Router';
import { UserContextProvider } from './context/userContext';

const App = () => {

    return (
        <UserContextProvider>
          <ContextProvider>
            <Container >
              <Router />
            </Container>
          </ContextProvider>
        </UserContextProvider>
    )
  }
export default App;
          
        
   
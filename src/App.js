import {Route, Switch, useHistory} from 'react-router-dom'
import { useState, useContext } from 'react';
import './App.css';
import { useGet } from './hooks/useGet';
import Search from './components/Search/Search'
import { Button, Container } from 'react-bootstrap';
import Characters from '../src/components/Characters/Characters';
import HerosTeam from './components/HerosTeam/HerosTeam';
import { ContextProvider } from './context/GlobalContext';
import  Context from './context/userContext';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import Router from './Router/Router';
import { UserContextProvider } from './context/userContext';
import Logout from './components/Login/Logout';

const App = () => {

    return (
        <UserContextProvider>
          <ContextProvider>
            <Container >
              <NavBar />
              <Router />
            </Container>
          </ContextProvider>
        </UserContextProvider>
    )
  }
export default App;
          
        
   
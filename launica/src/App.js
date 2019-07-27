import React from 'react';
import './App.css';
import Header from './components/header/Header';
import styled from 'styled-components';
import Sillas from './components/sections/Sillas';
import Carpa from './components/sections/Carpas';
import Brincolin from './components/sections/Brincolin';
import Packages from './components/sections/Packages';
import Contact from './components/sections/Contact';

const AppDiv = styled.div`
`

const H1 = styled.h1`
 margin-top: 150px;
`

function App() {
  return (
    <AppDiv className="App">
          <Header/>
        <H1>La Unica</H1>
        <Packages />
        <Sillas />
        <Carpa />
        <Brincolin/>
        <Contact />
    </AppDiv>
  );
}

export default App;

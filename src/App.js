import React from 'react';
import './App.css';
import Header from './components/header/Header';
import styled from 'styled-components';
import Sillas from './components/sections/Sillas';
import Carpa from './components/sections/Carpas';
import Brincolin from './components/sections/Brincolin';
import Packages from './components/sections/Packages';
import Contact from './components/sections/Contact';
import Footer from './components/footer/Footer'

const AppDiv = styled.div`
background-color: lightpink;
`

const H1 = styled.h1`
 padding-top: 100px;
 font-family: cursive;
 letter-spacing: 10.75px;
 font-size: 88px;
 font-weight: bolder;
 color: red;

 span {
   position: relative;
   top: -60px;  
   font-size: 30px;
   font-weight: normal;
   padding: 10px 50px;
   background: yellow;
   border-radius: 5px;
 }
`

function App() {
  return (
    <AppDiv id="brand" className="App">
          <Header/>
        <H1>La Unica<br/> <span>Mesas, Sillas, Brincolins, y Carpas</span></H1>
        <Packages />
        <Sillas />
        <Carpa />
        <Brincolin/>
        <Contact />
        <Footer />
    </AppDiv>
  );
}

export default App;

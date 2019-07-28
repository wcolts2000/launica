import React from 'react'
import styled from 'styled-components';
import bg from './../../assets/img/backyard.jpg'

const Div = styled.div`
    background-attachment: fixed;
    background-image: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
    background: linear-gradient(url(${bg})m, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, .7));
    padding: 50px;
    color: white;

    h2 {
        text-transform: uppercase;
        font-size: 42px;
        letter-spacing: 1.5px;
        font-weight: bold;
        text-shadow: 1px 1px 2px rgba(0,0,0,.5), 2px 2px 4px rgba(0,0,0,.5);
    }

    h3 {
        letter-spacing: 1.5px;
        font-weight: bold;
        font-size: 28px;
        text-shadow: 1px 1px 2px rgba(0,0,0,.5), 2px 2px 4px rgba(0,0,0,.5);
        border-bottom: 3px solid #fff;
        padding-bottom: 5px;
        text-transform: uppercase;
        display: inline-block;
    }

    p {
        position: absolute;
        font-size: 24px;
        font-weight: bold;
        letter-spacing: 1.5px;
        top: -25px;
        border-radius: 3px;
        right: 0;
        background: yellow;
        padding: 10px;
    }
`

const Ul = styled.ul`
    position: relative;
    text-align: left;
    padding: 20px;
    background: lightblue;
    opacity: .8;
    border-radius: 5px;
    position: relative;

    li {
        position: relative;
        list-style: none;
        font-size: 26px;
        color: black;
        font-weight: bold;
        line-height: 2.75;


        span {
            position: absolute;
            font-size: 24px;
            font-weight: bold;
            letter-spacing: 1.5px;
            top: 0 ;
            border-radius: 3px;
            right: 0;
            background: yellow;
            padding: 0 5px;  
        }
    }
`

function Packages() {
    return (
        <Div>
        <h2>
          Packages  
        </h2>
        <h3>Package 1</h3>
        <Ul>
            <li><p>$100.00</p></li>
            <li>20 Sillas</li>
            <li>2 Mesas</li>
            <li>1 Brincolin</li>
            <li>1 Pinata Gratis</li>
        </Ul>
        
        <h3>Package 2</h3>
        <Ul>
            <li><p>$135.00</p></li>
            <li>5 Mesas</li>
            <li>40 Sillas</li>
            <li>1 Brincolin</li>
            <li>Si no quieren pinata se les da 1 Mesa Mas con sus sillas</li>
        </Ul>
        <h3>Capras</h3>
        <Ul>
            <li>1 Carpa 10x20 <span>$100</span></li>
            <li>2 Carpa 20x20 <span>$170</span></li>
            <li>3 Carpa 20x30 <span>$180</span></li>
            <li>4 Carpa 20x40 <span>$200</span></li>
            <li>5 Carpa 16x40 <span>$200</span></li>
        </Ul>
        <h3>Mesas y Sillas</h3>
        <Ul>
            <li>Mesas<span>5</span></li>
            <li>Sillas<span>7</span></li>
        </Ul>
        </Div>
    )
}

export default Packages

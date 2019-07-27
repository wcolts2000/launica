import React from 'react'
import styled from 'styled-components';

const Ul = styled.ul`
    text-align: left;

    li {
        list-style: none;
    }
`

function Packages() {
    return (
        <div>
        <h2>
          Packages  
        </h2>
        <h3>Package 1</h3>
        <Ul>
            <li>20 Sillas</li>
            <li>2 Mesas</li>
            <li>1 Brincolin</li>
            <li>1 Pinata Gratis</li>
        </Ul>
        <h3>Package 2</h3>
        <Ul>
            <li>5 Mesas</li>
            <li>40 Sillas</li>
            <li>1 Brincolin</li>
            <li>Si no quieren pinata se les da 1 Mesa Mas con sus sillas</li>
        </Ul>
        <h3>Capras</h3>
        <Ul>
            <li>1 Carpa 10x20</li>
            <li>2 Carpa 20x20</li>
            <li>3 Carpa 20x30</li>
            <li>4 Carpa 20x40</li>
            <li>5 Carpa 16x40</li>
        </Ul>
        <h3>Mesas y Sillas</h3>
        <Ul>
            <li>Mesas</li>
            <li>Sillas</li>
        </Ul>
        </div>
    )
}

export default Packages

import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: red;
    z-index: 3;

    h3 {
        margin-right: 60px;
        width: 40%;
        text-align: left;
        padding: 0 10px 20px;
        
        a {
        text-decoration: none;
        color: white;
        }
    }

    div {
        display: flex;
        width: 60%;
        justify-content: space-around;

        a {
            text-decoration: none;
            font-size: 18px;
            text-transform: uppercase;
            padding: 20px 60px 0;
            color: white;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                opacity: .5;
            }
        }
    }
`

export default function Header() {
    return (
        <Nav>
            <h3><a href="brand" onClick={(e) => {
                e.preventDefault();
                window.scrollTo({top: 0, behavior: 'smooth'})
                }}>La Unica</a></h3>
            <div>
                <a href="#sillas">Sillas/Mesas</a>
                <a href="#carpas">Carpas</a>
                <a href="#brincolin">Brincolin</a>
                <a href="#contact">Contact</a>
            </div>
        </Nav>
    )
}

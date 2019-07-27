import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    display: flex;
    padding: 0 16px;
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    background-color: lightblue;
    z-index: 3

    h3 {
        margin-right: 60px;
        width: 40%;
        text-align: left;
        padding: 0 10px 20px;
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
            color: black;
            font-weight: bold;
            cursor: pointer;

            &:hover {
                opacity: .9;
            }
        }
    }
`

export default function Header() {
    return (
        <Nav>
            <h3>La Unica</h3>
            <div>
                <a href="#carps">Carps</a>
                <a href="#mesas">Mesas</a>
                <a href="#sillas">Sillas</a>
            </div>
        </Nav>
    )
}

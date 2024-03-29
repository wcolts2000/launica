import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    h2 {
        width: 100%;
        font-size: 36px;
        padding: 100px 0 100px;
        position: relative;
        color: rebeccapurple;

        &::after {
            position: absolute;
            content: '';
            width: 80px;
            height: 7px;
            background: rebeccapurple;
            left: 35%;
            z-index: 3;
            top: 120px;
            
        }
        &::before {
            position: absolute;
            content: '';
            width: 80px;
            height: 7px;
            background: rebeccapurple;
            left: 60%;
            z-index: 3;
            top: 120px;
            
        }
    }

    p {
        width: 45%;
        text-align: left;
        padding: 20px;
        font-size: 24px;
        line-height: 1.75;
        background: white;
        border-radius: 7px;
        box-shadow: 1px 2px 7px rgba(0,0,0,.3);
        opacity: .6;
        
    }

    img {
        width: 50%
    }


`

function Sillas() {
    return (
        <Div id="sillas"> 
            <h2>Mesas Y Sillas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ullam neque impedit atque ipsam blanditiis totam dolor accusantium assumenda libero quas iure earum, voluptatibus aliquam hic alias vero corrupti veritatis.</p>
            <img src='https://images.pexels.com/photos/6460/garden-party-animal-dog.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="rental chairs"/>
        </Div>
    )
}

export default Sillas

import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;

    h2 {
        width: 100%;
        font-size: 36px;
        padding: 10px 0 60px;
    }

    p {
        width: 45%;
        text-align: left;
        padding: 20px;
        font-size: 24px;
        line-height: 1.75;
    }

    img {
        width: 50%
    }


`

function Sillas() {
    return (
        <Div>
            <h2>Mesas Y Sillas</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ullam neque impedit atque ipsam blanditiis totam dolor accusantium assumenda libero quas iure earum, voluptatibus aliquam hic alias vero corrupti veritatis.</p>
            <img src='https://www.rentallplaza.net/wp-content/uploads/2014/12/chairs.jpg' />
        </Div>
    )
}

export default Sillas

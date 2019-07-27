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

function Carpa() {
    return (
        <Div>
            <h2>Carpa</h2>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfvL6sDDFjBQHHm_ylvL25Fz0vcF4SN_UrhTqJ3OvxCTirOdTK' />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ullam neque impedit atque ipsam blanditiis totam dolor accusantium assumenda libero quas iure earum, voluptatibus aliquam hic alias vero corrupti veritatis.</p>
        </Div>
    )
}

export default Carpa

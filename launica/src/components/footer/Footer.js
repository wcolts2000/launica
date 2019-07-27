import React from 'react'
import styled from 'styled-components';

const FooterDiv = styled.footer`
    width: 100%;
    padding: 30px;
    background: lightblue;
    text-align: center;

    p {
        font-size: 12px;
    }
`

function Footer() {
    return (
        <FooterDiv>
            <p>&copy; 2019 | design by Hurry Up Print</p>            
        </FooterDiv>
    )
}

export default Footer

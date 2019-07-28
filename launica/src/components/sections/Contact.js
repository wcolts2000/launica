import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
padding: 120px 20px;
background: papayawhip;
color: white;
justify-content: center;
align-items: center;
h2 {
 color: rebeccapurple;
 font-size: 32px;
 margin-bottom: 70px;   
}

input[type=submit] {
    background: none;
    outline: none;
    border: 4px solid rebeccapurple;
    cursor: pointer;
    color: rebeccapurple;
    font-weight: bolder;
    letter-spacing: 1.75px;
    transition: all .3s ease-in-out;

    &:focus, &:active, &:hover {
        outline: none;
        background: rebeccapurple;
        color: white;

    }
}

input, textarea {
    padding: 10px;
    font-size: 22px;
    border: none;
    border-bottom: 4px solid rebeccapurple;
    margin-bottom: 20px;
    width: 50%;
    background-color: rgba(255,255,255,.8);

    &:focus {
        border-bottom: 1px solid green;
    }




}
`

class Contact extends Component {
    state = {
        name: '',
        email: '',
        interest: ''
    }

handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
} 

handleSubmit = (e) => {
 e.preventDefault()
 alert('Hello')
}


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <h2>Find Availability for Your Party Date</h2>
                <input id="name" placeholder='name...' onChange={this.handleChange} type="text" name="name" value={this.state.name} />
                <input id='email' type="email" name="email" onChange={this.handleChange} placeholder="email@sample.com" value={this.state.email} />
                <input type="Date" />
                <textarea name="interest" id="interest" rows='10' placeholder='message here...' value={this.state.interest} onChange={this.handleChange} />
                <input type='submit' value="SUBMIT" />
            </Form>
        )
    }
}

export default Contact

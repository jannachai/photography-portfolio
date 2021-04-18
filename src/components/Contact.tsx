import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import TimeBar from './TimeBar';

const Contact = styled.div`
    height: 100vh;
    width: 100vw;
    background: black;
    color: white;
    
    ul {
        list-style-type: none;
    }
`

const ContactBody = styled.div`
    display: flex;

`

function ContactPage() {
    return (
        <Contact>
            <Nav />
            <TimeBar />
            <ContactBody>
                <div>
                    <p>AKL, New Zealand</p>
                    <p>wannachaiburke@gmail.com</p>
                    <p>+64 21 2960 652</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt="stock"/>
                </div>
            </ContactBody>
        </Contact>
    )
}

export default ContactPage;
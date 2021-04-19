import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import TimeBar from './TimeBar';
import { Helmet } from 'react-helmet';

const Contact = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    ul {
        list-style-type: none;
    }
`

const ContactBody = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    padding-top: 30px;
`

const ContactDetails = styled.div`
    font-size: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

function ContactPage() {
    return (
        <Contact>
            <Helmet>
                <title>Contact - Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <ContactBody>
                <ContactDetails>
                    <p>AKL, New Zealand</p>
                    <p>wannachaiburke@gmail.com</p>
                    <p>(+64) 21 2960 652</p>
                </ContactDetails>
                <div>
                    <img style={{height: '870px'}} src="https://images.unsplash.com/photo-1507097634215-e82e6b518529?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="stock"/>
                </div>
            </ContactBody>
        </Contact>
    )
}

export default ContactPage;
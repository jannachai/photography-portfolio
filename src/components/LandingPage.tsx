import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import TimeBar from './TimeBar';
import { Helmet } from 'react-helmet';

const Landing = styled.div`
    width: 100vw; 
    height: 100vh;
    background: black;
    color: white;
    padding-top: 15%;
    
    ul {
        list-style-type: none;
    }
`

const LandingBody = styled.nav`
    font-family: 'Antonio';
    font-size: 6vw;
    text-decoration: underline;
    text-align: center;

    a, a:visited {
        color: inherit; 
        text-decoration: none;
    }
`

function LandingPage() {
    return (
        <Landing>
            <Helmet>
                <title>Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <LandingBody>
                <ul>
                    <li><Link to="/Te-Motu">Te Motu</Link></li>
                    <li>LANDING PAGE LANDING PAGE</li>
                    <li>LANDING PAGE LANDING</li>
                    <li>LANDING PAGE</li>
                </ul>
            </LandingBody>
        </Landing>
    )
}

export default LandingPage;
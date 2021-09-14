import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import TimeBar from './TimeBar';
import { Helmet } from 'react-helmet';

const Landing = styled.div`
    width: 100vw; 
    height: fit-content;
    background: black;
    color: white;
    padding-top: 15%;
    padding-bottom: 10%;
    
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
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
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
                    <li><Link to="">Tongariro National Park</Link></li>
                    <li><Link to="/Sweet-Red">Sweet Red Strawberries</Link></li>
                    <li>The Glass Goose</li>
                    <li>Blue Springs</li>
                    <li>SEA LIFE Sydney</li>
                    <li>Blue Mountains</li>
                    <li>ZEALANDIA</li>
                </ul>
            </LandingBody>
        </Landing>
    )
}

export default LandingPage;
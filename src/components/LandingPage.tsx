import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import TimeBar from './TimeBar';

const Landing = styled.div`
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

    a:visited {
        color: inherit; 
        text-decoration: none;
    }
`

function LandingPage() {
    return (
        <Landing>
            <Nav />
            <TimeBar />
            <LandingBody>
                <ul>
                    <li><Link to="/page/1">LANDING PAGE</Link></li>
                    <li>LANDING PAGE LANDING PAGE</li>
                    <li>LANDING PAGE LANDING</li>
                    <li>LANDING PAGE</li>
                </ul>
            </LandingBody>
        </Landing>
    )
}

export default LandingPage;
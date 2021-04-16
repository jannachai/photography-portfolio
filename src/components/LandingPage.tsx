import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Landing = styled.div`
    height: 100vh;
    width: 100vw;
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
`

const Nav = styled.nav`
    font-size: 12px;
    list-style-type: none;
    position: fixed;
    right: 1.5%;
    top: 2%;
    text-align: right;
    line-height: 19px;
`
function Product({ match }: any) {
    return <h2>This is a page for product with ID: {match.params.id} </h2>;
}

function LandingPage() {
    return (
            <Landing>
            <Nav>
                <ul>
                    <li>WORK</li>
                    <li>ABOUT</li>
                    <li>JOBS</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
            </Nav>
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
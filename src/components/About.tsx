import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import TimeBar from './TimeBar';
import { Helmet } from 'react-helmet';

const About = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    ul {
        list-style-type: none;
    }
`

const AboutBody = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    padding-top: 30px;
`

function AboutPage() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <About>
            <Helmet>
                <title>About - Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <AboutBody>
            </AboutBody>
        </About>
    )
}

export default AboutPage;
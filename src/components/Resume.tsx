import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import TimeBar from './TimeBar';
import { Helmet } from 'react-helmet';

const Resume = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: black;
    color: white;
    ul {
        list-style-type: none;
    }
`

const ResumeBody = styled.div`
    display: flex;
    justify-content: space-around;
    position: relative;
    padding-top: 30px;
`

function ResumePage() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    
    return (
        <Resume>
            <Helmet>
                <title>Resume - Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <ResumeBody>
            </ResumeBody>
        </Resume>
    )
}

export default ResumePage;
import React from 'react';
import styled from 'styled-components';
import Nav from '../../Nav';
import TimeBar from '../../TimeBar';
import TitlePhoto from '../../TitlePhoto';
import titlePhoto from './Photos/IMG_0821.jpg';
import { Helmet } from 'react-helmet';

const SweetRedPage = styled.div`
    width: 100vw; 
    height: 100vh;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 800px;
    font-family: 'Nunito';
    
    ul {
        list-style-type: none;
    }
`

function SweetRed() {
    return (
        <SweetRedPage>
            <Helmet>
                <title>Sweet Red - Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <TitlePhoto photo={titlePhoto} title="SWEET RED STRAWBERRY FARM | HELENSVILLE"/>
        </SweetRedPage>
    )
}

export default SweetRed;
import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import TimeBar from '../TimeBar';
import TitlePhoto from '../TitlePhoto';
import titlePhoto from './Photos/IMG_0963.jpg';
import { Helmet } from 'react-helmet';

const TeMotuPage = styled.div`
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

function TeMotu() {
    return (
        <TeMotuPage>
            <Helmet>
                <title>Te Motu - Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <TitlePhoto photo={titlePhoto} title="Te Motu | Waiheke"/>
            <p>Aydriannah's 25th birthday on a Lunch and Wine at Te Motu, Waiheke</p>
        </TeMotuPage>
    )
}

export default TeMotu;
import React from 'react';
import styled, { keyframes } from 'styled-components';
import Nav from '../Nav';
import TimeBar from '../TimeBar';
import titlePhoto from './Photos/IMG_0963.jpg';
import { Parallax } from 'react-parallax';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { bounce } from 'react-animations';

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

const ArrowContainer = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite
`

const Container = () => {
    return (
        <Parallax
            blur={0}
            bgImage={titlePhoto}
            bgImageAlt="the dog"
            strength={200}
        >
            <div style={{ height: '870px', width: '80vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <div style={{ width: '100%', height: '40%', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'space-between'}}>
                    <div style={{color: "white"}}>Te Motu | Waiheke</div>
                    <ArrowContainer><HiArrowNarrowDown style={{height: '20px', width: '20px', paddingBottom: '50px', color: "white"}} /></ArrowContainer>
                </div>
            </div>
        </Parallax>
    )
}

function TeMotu() {
    return (
        <TeMotuPage>
            <Nav />
            <TimeBar />
            {Container()}
            <p>Aydriannah's 25th birthday on a Lunch and Wine at Te Motu, Waiheke</p>
        </TeMotuPage>
    )
}

export default TeMotu;
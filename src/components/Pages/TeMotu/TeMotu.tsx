import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../../Nav';
import TimeBar from '../../TimeBar';
import TitlePhoto from '../../TitlePhoto/TitlePhoto';
import titlePhoto from './Photos/IMG_0963.jpg';
import Luwi1 from './Photos/IMG_0937-2.jpg';
import Luwi2 from './Photos/IMG_0938.jpg';
import Luwi3 from './Photos/IMG_0943.jpg';
import { Helmet } from 'react-helmet';
import TitleDetails from '../../TitleDetails/TitleDetails';

const TeMotuPage = styled.div`
    width: 100vw; 
    height: 100%;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    font-family: 'Nunito';
    
    ul {
        list-style-type: none;
    }
`

const StyledContainer = styled.div`
    min-height: 700px;
    background-color: white;
    width: 1535px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

function TeMotu() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const titleDetails = {
        persons: 'Aydriannah, Jemima, Luwi',
        location: 'Te Motu, Waiheke',
        when: 'January 22, 2021'
    }
    
    return (
        <TeMotuPage>
            <Helmet>
                <title>Te Motu - Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <TitlePhoto photo={titlePhoto} title="TE MOTU | WAIHEKE"></TitlePhoto>
            <TitleDetails details={titleDetails}/>
            <StyledContainer>
                <img src={Luwi1} alt="luwi-1" style={{height: 500}}/>
                <img src={Luwi2} alt="luwi-2" style={{height: 500}}/>
                <img src={Luwi3} alt="luwi-3" style={{height: 500}}/>
            </StyledContainer>
        </TeMotuPage>
    )
}

export default TeMotu;
import React from 'react';
import { Parallax } from 'react-parallax';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { HiArrowNarrowDown } from 'react-icons/hi';

const ArrowContainer = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite
`

function TitlePhoto(props) {
    return (
        <Parallax
            blur={0}
            bgImage={props.photo}
            bgImageAlt="the girls"
            strength={300}
        >
            <div style={{ height: '870px', width: '80vw', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
                <div style={{ width: '100%', height: '40%', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'space-between'}}>
                    <div style={{color: "white", fontWeight: "bold"}}>{props.title}</div>
                    <ArrowContainer><HiArrowNarrowDown style={{height: '20px', width: '20px', paddingBottom: '50px', color: "white"}} /></ArrowContainer>
                </div>
            </div>
        </Parallax>
    )
}

export default TitlePhoto;
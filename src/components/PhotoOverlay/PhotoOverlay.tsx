import React from "react";
import styled from "styled-components";

const Overlay = styled.div`
    background-color: #080c36;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: .3s ease;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    font-family: 'Bree Serif';
`

function PhotoOverlay({hoverText}) {
    return (
        <Overlay className="overlay">
            {hoverText}
        </Overlay>
    )
}

export default PhotoOverlay;
import React from "react";
import styled from "styled-components";
import { LayoutWrapper } from "./styles";

const LeftImage = styled.div`
    flex: 6;
    display: flex;
    align-items: flex-end;

    img {
        width: 100%;
    }
`

const MiddleImage = styled.div`
    flex: 5.5;
    margin: 0 50px;
    overflow: hidden;

    img {
        margin: 0 0 -6px -75px;
        height: 100vh;
    }
`

const RightImage = styled.div`
    flex: 6;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;

    img {
        width: 100%;
    }
`

function ThreeLongMid({photos}) {
    
    
    return (
        <LayoutWrapper className="photos 3-long-mid">
            <LeftImage>
                <img src={photos[0]} alt={photos[0]}/>
            </LeftImage>
            <MiddleImage>
                <img src={photos[1]} alt={photos[1]}/>
            </MiddleImage>
            <RightImage>
                <img src={photos[2]} alt={photos[2]}/>
            </RightImage>
        </LayoutWrapper>
    )
}

export default ThreeLongMid;
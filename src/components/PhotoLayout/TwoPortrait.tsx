import React from "react";
import styled from "styled-components";

const SingleContainer = styled.div`
    margin-bottom: -6px;
    img {
        width: 50%;
    }
`;

function TwoPortrait({photos}) {
    return (
        <SingleContainer className="photos single" >
            <img src={photos[0]} alt={photos[0]} />
            <img src={photos[1]} alt={photos[1]} />
        </SingleContainer>
    )
}

export default TwoPortrait;
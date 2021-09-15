import React from "react";
import styled from "styled-components";

const SingleContainer = styled.div`
    margin-bottom: -6px;
    img {
        width: 100%;
    }
`;

function SingleLandscape({photos}) {
    return (
        <SingleContainer className="photos single" >
            <img src={photos[0]} alt={photos[0]} />
        </SingleContainer>
    )
}

export default SingleLandscape;
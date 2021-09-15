import React from "react";
import styled from "styled-components";
import { LayoutWrapper } from "./styles";

function SingleLandscape({photos}) {
    const SingleContainer = styled.div`
        margin-bottom: -6px;
        img {
            width: 100%;
        }
    `;

    return (
        <LayoutWrapper>
            <SingleContainer>
                <img src={photos[0]} alt={photos[0]} />
            </SingleContainer>
        </LayoutWrapper>
    )
}

export default SingleLandscape;
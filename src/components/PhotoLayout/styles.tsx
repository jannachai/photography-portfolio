import styled, { keyframes } from "styled-components";
import { slideInUp, slideInLeft } from 'react-animations';

const slideInUpAnimation = keyframes`${slideInUp}`;
const slideInLeftAnimation = keyframes`${slideInLeft}`;

export const MainContainer = styled.div`
    max-height: 870px;
    width: 78vw;
    margin-bottom: 30px;
    overflow: hidden;

    .slideInUp-animation {
        animation: 1.5s ${slideInUpAnimation};
    };

    .slideInLeft-animation {
        animation: 2s ${slideInLeftAnimation};
    };
`

export const LayoutWrapper = styled.div`
    min-height: inherit;
    width: inherit;
    display: flex;
    background-color:white;

`

export const TwoPortraitBorderContainer = styled.div`
    display: flex;
    padding: 120px;
    background-color: white;
    justify-content: space-around;
`;

export const TwoPortraitBorderPhoto = styled.div`
    width: 32%;
    overflow:hidden;
    img {
        width: 100%;
    }

    &:hover .overlay {
        opacity: 1;
    }

`
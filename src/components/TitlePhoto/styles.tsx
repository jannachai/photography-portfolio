import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { HiArrowNarrowDown } from 'react-icons/hi';

export const TitlePhotoWrapper = styled.div`
    height: 870px;
    width: 80vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const TitlePhotoContainer = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const TitlePhotoText = styled.div`
    color: white;
    font-weight: bold;
`

export const StyledArrowDown = styled(HiArrowNarrowDown)`
    height: 20px;
    width: 20px;
    padding-bottom: 50px;
    color: white;
    animation: 3s ${keyframes`${bounce}`} infinite
`
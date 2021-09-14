import React from 'react';
import { Parallax } from 'react-parallax';
import { StyledArrowDown, TitlePhotoContainer, TitlePhotoText, TitlePhotoWrapper } from './styles';


function TitlePhoto({ title, photo }) {
    return (
        <Parallax
            blur={0}
            bgImage={photo}
            bgImageAlt="the girls"
            strength={300}
            style={{minHeight: 870}}
        >
            <TitlePhotoWrapper>
                <TitlePhotoContainer>
                    <TitlePhotoText>{title}</TitlePhotoText>
                    <StyledArrowDown/>
                </TitlePhotoContainer>
            </TitlePhotoWrapper>
        </Parallax>
    )
}

export default TitlePhoto;
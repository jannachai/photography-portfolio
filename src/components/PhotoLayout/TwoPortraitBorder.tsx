import React from "react";
import PhotoOverlay from "../PhotoOverlay/PhotoOverlay";
import { TwoPortraitBorderContainer, TwoPortraitBorderPhoto } from "./styles";

function TwoPortraitBorder({photos, hover}) {
    return (
        <TwoPortraitBorderContainer className="photos single" >
            <TwoPortraitBorderPhoto>
                <div style={{display:"flex", position:"relative"}}>
                    <img src={photos[0]} alt={photos[0]} />
                    {hover && 
                        <PhotoOverlay hoverText={hover[0]}/>
                    }
                </div>
            </TwoPortraitBorderPhoto>
            <TwoPortraitBorderPhoto>
                <div style={{display:"flex", position:"relative"}}>
                    <img src={photos[1]} alt={photos[1]} /> 
                    {hover && 
                        <PhotoOverlay hoverText={hover[1]}/>
                    }
                </div>
            </TwoPortraitBorderPhoto>
        </TwoPortraitBorderContainer>
    )
}

export default TwoPortraitBorder;
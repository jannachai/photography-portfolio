import React from "react";
import SingleLandscape from "./SingleLandscape";
import { MainContainer } from "./styles";
import ThreeLongMid from "./ThreeLongMid";
import TwoPortrait from "./TwoPortrait";
import TwoPortraitBorder from "./TwoPortraitBorder";

interface PhotoLayoutProps {
    photos: any[],
    layoutName: string,
    hover?: string[]
}

function PhotoLayout({ photos, layoutName, hover }: PhotoLayoutProps) {
    function Layout() {
        switch(layoutName) {
            case "3-long-mid":
                return <ThreeLongMid photos={photos}/>
            case "2-portrait":
                return <TwoPortrait photos={photos}/>
            case "2-portrait-border":
                return <TwoPortraitBorder photos={photos} hover={hover}/>
            case "single":
                return <SingleLandscape photos={photos} />
        }
    }

    return (
        <MainContainer>
            {Layout()}
        </MainContainer>
    )
}

export default PhotoLayout;
import React from "react";
import SingleLandscape from "./SingleLandscape";
import { MainContainer } from "./styles";
import ThreeLongMid from "./ThreeLongMid";
import TwoPortrait from "./TwoPortrait";

function PhotoLayout({ photos, layoutName }) {
    function Layout() {
        switch(layoutName) {
            case "3-long-mid":
                return <ThreeLongMid photos={photos}/>
            case "2-portrait":
                return <TwoPortrait photos={photos}/>
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
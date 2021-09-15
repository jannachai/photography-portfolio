import React from "react";
import { MainContainer } from "./styles";
import ThreeLongMid from "./ThreeLongMid";

function PhotoLayout({ photos, layoutName }) {
    function Layout() {
        switch(layoutName) {
            case "3-long-mid":
                return <ThreeLongMid photos={photos}/>
        }
    }

    return (
        <MainContainer>
            {Layout()}
        </MainContainer>
    )
}

export default PhotoLayout;
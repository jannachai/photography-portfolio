import React from "react";
import { DetailsContainer, Heading, Subtitle } from "./styles";

function TitleDetails({details}) {
    return (
        <DetailsContainer>
            <div>
                <Heading>Persons</Heading>
                <Subtitle>{details.persons}</Subtitle>
            </div>
            <div>
                <Heading>Location</Heading>
                <Subtitle>{details.location}</Subtitle>
            </div>
            <div>
                <Heading>Occurring</Heading>
                <Subtitle>{details.when}</Subtitle>
            </div>
        </DetailsContainer>
    )
}

export default TitleDetails;
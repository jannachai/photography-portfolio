import React, { Fragment } from "react";
import { BodyText, Heading } from "./style";

function EventSummary({headingText, bodyText}: any) {

    return (
        <Fragment>     
            <Heading>{headingText}</Heading>
            <BodyText>
                {bodyText.split("\n").map(str => <p style={{marginBottom: 21}}>{str}</p>)}
            </BodyText>
        </Fragment>
    )
}

export default EventSummary; 
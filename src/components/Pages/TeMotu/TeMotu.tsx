import React, { useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../../Nav';
import TimeBar from '../../TimeBar';
import TitlePhoto from '../../TitlePhoto/TitlePhoto';
import titlePhoto from './Photos/IMG_0963.jpg';
import Luwi1 from './Photos/IMG_0937-2.jpg';
import Luwi2 from './Photos/IMG_0938.jpg';
import Luwi3 from './Photos/IMG_0943.jpg';
import { Helmet } from 'react-helmet';
import TitleDetails from '../../TitleDetails/TitleDetails';
import EventSummary from '../../EventSummary/EventSummary';
import PhotoLayout from '../../PhotoLayout/PhotoLayout';

const TeMotuPage = styled.div`
    width: 100vw; 
    height: 100%;
    background: black;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    font-family: 'Nunito';
    padding-bottom: 200px;
    ul {
        list-style-type: none;
    }
`

function TeMotu() {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const titleDetails = {
        persons: 'Aydriannah, Jemima, Luwi',
        location: 'Te Motu, Waiheke',
        when: 'January 22, 2021'
    }
    
    return (
        <TeMotuPage>
            <Helmet>
                <title>Te Motu - Wannachai Burke</title>
            </Helmet>
            <Nav />
            <TimeBar />
            <TitlePhoto photo={titlePhoto} title="TE MOTU | WAIHEKE"></TitlePhoto>
            <TitleDetails details={titleDetails}/>
            <EventSummary 
                headingText={"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit... There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."}
                bodyText={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n

                Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n
                
                1914 translation by H. Rackham
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
                
                `}
            />
            <PhotoLayout 
                photos={[
                    Luwi1,
                    Luwi2,
                    Luwi3
                ]}
                layoutName="3-long-mid"
            />
        </TeMotuPage>
    )
}

export default TeMotu;
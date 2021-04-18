import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { HiSun, HiMoon } from 'react-icons/hi';

const Time = styled.div`
    font-family: 'Nunito';
    font-size: 12px;
    list-style-type: none;
    position: fixed;
    right: 2.0833vw;
    bottom: 30px;
    text-align: right;
    line-height: 19px;
    display: flex;
    align-items: center;
`

function TimeBar() {
    const [time, setTime] = useState(moment().format("H:mm"));
    useEffect(() => {
        const interval = setInterval(() => setTime(moment().format("H:mm")), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])

    const [timeOfDay, setTimeOfDay] = useState(moment().format("a"));
    useEffect(() => {
        const interval = setInterval(() => setTimeOfDay(moment().format("a")), 1000);
        return () => {
            clearInterval(interval);
        };
    }, [])


    return (
        <Time>
            { timeOfDay === 'am' 
                ? <HiSun style={{height: '15px', width: '15px', paddingRight: '5px'}}/> 
                : <HiMoon style={{height: '15px', width: '15px', paddingRight: '5px'}}/> 
            }
            {"AKL " + time }
        </Time>
    )
}

export default TimeBar;
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavigationBody = styled.nav`
    font-size: 12px;
    list-style-type: none;
    position: fixed;
    right: 2.0833vw;
    top: 30px;
    text-align: right;
    line-height: 18px;
    font-family: 'Nunito';
    z-index: 10000;

    a, a:visited, a:active {
        color: inherit;
        text-decoration: none;
    }
`

function Nav() {
    return (
        <NavigationBody>
            <ul>
                <li><NavLink activeStyle={{fontWeight: 'bold'}} exact to="/">HOME</NavLink></li>
                <li><NavLink activeStyle={{fontWeight: 'bold'}} to="/page/about">ABOUT</NavLink></li>
                <li><NavLink activeStyle={{fontWeight: 'bold'}} to="/page/resume">RESUME</NavLink></li>
                <li><NavLink activeStyle={{fontWeight: 'bold'}} to="/page/contact">CONTACT</NavLink></li>
            </ul>
        </NavigationBody>
    )
}

export default Nav;
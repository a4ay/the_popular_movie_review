import React, {Component} from 'react';
import styled from 'styled-components';

const NavigationBar = ()=>{
    return(
        <>
            <Nav>
            <NavContainer>
                <Logo>The Popular MovieDB</Logo>
            </NavContainer>
            </Nav>
            <Filler />
        </>
    )
}

const Nav = styled.nav`
    height : 72px;
    background-color : #272829;
    width: 100%;
    font : sans-serif;
    color: #fff;
    padding: 0px 100px;
    position: fixed;
    z-index: 100;
`;

const NavContainer = styled.div`
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    display : flex;
    align-items: center;
    height: 100%;
`;
const Logo = styled.span`
    font-size: 1.5rem;
`;
const Filler = styled.div`
    height : 72px;
`;
export default NavigationBar
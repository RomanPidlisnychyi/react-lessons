import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Navigation from './Navigation';
import Logo from './Logo';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    align-items: center;
    height: 75px;
`;

const AppBar = () => (
    <CSSTransition in={true} appear timeout={500} classNames="Appbar-slideIn">
        {stage => {
            console.log(stage);
            return (
                <header>
                    <Nav>
                        <CSSTransition
                            in={stage === 'entered'}
                            timeout={500}
                            classNames="Appbar-logo-fade"
                            unmountOnExit
                        >
                            <Logo />
                        </CSSTransition>
                        <CSSTransition
                            in={stage === 'entered'}
                            timeout={500}
                            classNames="Appbar-nav-fade"
                            unmountOnExit
                        >
                            <Navigation />
                        </CSSTransition>
                    </Nav>
                </header>
            );
        }}
    </CSSTransition>
);

export default AppBar;

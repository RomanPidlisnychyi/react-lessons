import React, { Component } from 'react';
import styled from 'styled-components';

const Owerlay = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(33, 33, 33, 0.5);
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    background-color: rgba(33, 33, 33, 0.9);
    width: 50%;
    height: 50%;
`;

export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handlerKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handlerKeyDown);
    }

    handlerKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleOwerlayClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <Owerlay onClick={this.handleOwerlayClick}>
                <Content>{this.props.children}</Content>
            </Owerlay>
        );
    }
}

import React, { Component } from 'react';
import CounterControls from './CounterControls';
import styled from 'styled-components';

const CounterValue = styled.span`
    margin: 10px;
`;

export default class Counter extends Component {
    static propsTypes = {};

    static defaultProps = { initialValue: 5, step: 1 };

    state = {
        value: this.props.initialValue,
    };

    handleIncrement = () => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value + props.step,
            };
        });
        console.log('Increment');
    };

    handleDecrement = () => {
        this.setState((prevState, props) => {
            return {
                value: prevState.value - props.step,
            };
        });

        console.log('Decrement');
    };

    render() {
        return (
            <div>
                <CounterControls
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
                <CounterValue>{this.state.value}</CounterValue>
            </div>
        );
    }
}

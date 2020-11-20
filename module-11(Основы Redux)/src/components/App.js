import React, { Component } from 'react';
import Timer from './Timer';
import StepSelector from './StepSelector';

const stepOptions = [5, 10, 15, 20, 25, 30];

export default class App extends Component {
    render() {
        return (
            <div>
                <Timer />
                <StepSelector options={stepOptions} />
            </div>
        );
    }
}

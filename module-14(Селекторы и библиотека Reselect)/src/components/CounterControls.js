import React from 'react';

const CounterControls = ({ onIncrement, onDecrement }) => {
    return (
        <div>
            <button type="button" onClick={onIncrement}>
                Decrement
            </button>
            <button type="button" onClick={onDecrement}>
                Increment
            </button>
        </div>
    );
};

export default CounterControls;

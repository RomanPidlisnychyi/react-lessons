import React from 'react';
import { connect } from 'react-redux';
import timerActions from '../redux/timerActions';
import styled from 'styled-components';

const Button = styled.button`
    padding: 5px 30px;
    margin: 10px;
`;

const Timer = ({ value, step, onIncrement, onDecrement }) => (
    <div>
        <Button type="button" onClick={() => onDecrement(step)}>
            -
        </Button>
        <span>{value} minutes</span>
        <Button type="button" onClick={() => onIncrement(step)}>
            +
        </Button>
    </div>
);

const mapStateToProps = state => ({
    value: state.timer.value,
    step: state.timer.step,
});

// const mapDispatchToProps = dispatch => ({
//     onIncrement: () => dispatch(timerActions.increment(10)),
//     onDecrement: () => dispatch(timerActions.decrement(10)),
// });

const mapDispatchToProps = {
    onIncrement: timerActions.increment,
    onDecrement: timerActions.decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);

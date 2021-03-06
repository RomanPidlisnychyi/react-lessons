import { combineReducers } from 'redux';
import { INCREMENT, DECREMENT, CHANGE_STEP } from './timerTypes';

const valueReducer = (state = 0, { type, payload }) => {
    switch (type) {
        case INCREMENT:
            return state + payload.value;

        case DECREMENT:
            return state - payload.value < 0 ? state : state - payload.value;

        default:
            return state;
    }
};

const stepReducer = (state = 15, action) => {
    switch (action.type) {
        case CHANGE_STEP:
            return action.payload.step;

        default:
            return state;
    }
};

export default combineReducers({
    value: valueReducer,
    step: stepReducer,
});

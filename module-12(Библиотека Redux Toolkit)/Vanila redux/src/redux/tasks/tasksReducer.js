import { combineReducers } from 'redux';
import tasksActionTypes from './tasksActionTypes';

const items = (state = [], action) => {
    switch (action.type) {
        case tasksActionTypes.ADD:
            return [action.payload.task, ...state];

        case tasksActionTypes.REMOVE:
            return state.filter(item => item.id !== action.payload.taskId);

        case tasksActionTypes.TOGGLE_COMPLETED:
            return state.map(task =>
                task.id === action.payload.taskId
                    ? {
                          ...task,
                          complited: !task.complited,
                      }
                    : task,
            );

        default:
            return state;
    }
};

const filter = (state = '', action) => {
    switch (action.type) {
        case tasksActionTypes.CHANGE_FILTER:
            return action.payload.filter;

        default:
            return state;
    }
};

export default combineReducers({
    items,
    filter,
});

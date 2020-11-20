import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './tasksActions';

const addTask = (state, action) => [action.payload.task, ...state];

const removeTask = (state, action) =>
    state.filter(item => item.id !== action.payload);

const toggleCompleted = (state, action) =>
    state.map(task =>
        task.id === action.payload
            ? {
                  ...task,
                  complited: !task.complited,
              }
            : task,
    );

const items = createReducer([], {
    [tasksActions.addTask]: addTask,
    [tasksActions.removeTask]: removeTask,
    [tasksActions.toggleCompleted]: toggleCompleted,
});

const filter = createReducer('', {
    [tasksActions.changeFilter]: (state, action) => action.payload,
});

export default combineReducers({
    items,
    filter,
});

import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import tasksActions from './tasksActions';

const addTasks = (state, action) => action.payload;

const addTask = (state, action) => [action.payload, ...state];

const removeTask = (state, action) =>
    state.filter(task => task.id !== action.payload);

const toggleCompleted = (state, action) =>
    state.map(task => (task.id === action.payload.id ? action.payload : task));

const items = createReducer([], {
    [tasksActions.fetchTasksSuccess]: addTasks,
    [tasksActions.addTaskSuccess]: addTask,
    [tasksActions.removeTaskSuccess]: removeTask,
    [tasksActions.toggleCompletedSuccess]: toggleCompleted,
});

const filter = createReducer('', {
    [tasksActions.changeFilter]: (state, action) => action.payload,
});

const loading = createReducer(false, {
    [tasksActions.fetchTasksRequest]: () => true,
    [tasksActions.fetchTasksSuccess]: () => false,
    [tasksActions.fetchTasksError]: () => false,
    [tasksActions.addTaskRequest]: () => true,
    [tasksActions.addTaskSuccess]: () => false,
    [tasksActions.addTaskError]: () => false,
    [tasksActions.removeTaskRequest]: () => true,
    [tasksActions.removeTaskSuccess]: () => false,
    [tasksActions.removeTaskError]: () => false,
    [tasksActions.toggleCompletedRequest]: () => true,
    [tasksActions.toggleCompletedSuccess]: () => false,
    [tasksActions.toggleCompletedError]: () => false,
});

export default combineReducers({
    items,
    filter,
    loading,
});

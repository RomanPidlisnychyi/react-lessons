import { createAction } from '@reduxjs/toolkit';
import uuid from 'react-uuid';

const addTask = createAction('tasks/add', text => ({
    payload: {
        task: {
            id: uuid(),
            text,
            complited: false,
        },
    },
}));

const removeTask = createAction('tasks/remove');
const toggleCompleted = createAction('tasks/toggleComplited');
const changeFilter = createAction('tasks/changeFilter');

export default {
    addTask,
    removeTask,
    toggleCompleted,
    changeFilter,
};

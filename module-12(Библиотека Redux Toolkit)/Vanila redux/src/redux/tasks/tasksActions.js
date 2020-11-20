import uuid from 'react-uuid';
import tasksActionTypes from './tasksActionTypes';

const addTasks = text => ({
    type: tasksActionTypes.ADD,
    payload: {
        task: {
            id: uuid(),
            text,
            complited: false,
        },
    },
});

const removeTask = taskId => {
    return {
        type: tasksActionTypes.REMOVE,
        payload: {
            taskId,
        },
    };
};

const toggleCompleted = taskId => ({
    type: tasksActionTypes.TOGGLE_COMPLETED,
    payload: {
        taskId,
    },
});

const changeFilter = filter => ({
    type: tasksActionTypes.CHANGE_FILTER,
    payload: {
        filter,
    },
});

export default {
    addTasks,
    removeTask,
    toggleCompleted,
    changeFilter,
};

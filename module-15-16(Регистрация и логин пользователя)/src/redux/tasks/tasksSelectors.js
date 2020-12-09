import { createSelector } from '@reduxjs/toolkit';

const getTasks = state => state.tasks.items;

const getLoading = state => state.tasks.loading;

const getFilter = state => state.tasks.filter;

const getVisibleTasks = createSelector([getTasks, getFilter], (tasks, filter) =>
    tasks.filter(task =>
        task.text.toLowerCase().includes(filter.toLowerCase()),
    ),
);

// const getVisibleTasks = state => {
//     const tasks = getTasks(state);
//     const filter = getFilter(state).toLowerCase();

//     return tasks.filter(task => task.text.toLowerCase().includes(filter));
// };

const getTaskById = createSelector(
    [(state, taskId) => taskId, getTasks],
    (taskId, tasks) => tasks.find(item => item.id === taskId),
);

// const getTaskById = (state, taskId) => {
//     const tasks = getTasks(state);

//     return tasks.find(item => item.id === taskId);
// };

export default {
    getLoading,
    getFilter,
    getVisibleTasks,
    getTaskById,
};

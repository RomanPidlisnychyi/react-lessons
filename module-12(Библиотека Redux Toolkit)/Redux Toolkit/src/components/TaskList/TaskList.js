import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({ tasks }) => (
    <ul>
        {tasks.map(({ id }) => (
            <TaskListItem key={id} id={id} />
        ))}
    </ul>
);

const mapStateToProps = state => {
    const { items, filter } = state.tasks;
    const normolizedFilter = filter.toLowerCase();
    const filtredTasks = items.filter(task =>
        task.text.toLowerCase().includes(normolizedFilter),
    );

    return {
        tasks: filtredTasks,
    };
};

export default connect(mapStateToProps)(TaskList);

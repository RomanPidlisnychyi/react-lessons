import React from 'react';
import { connect } from 'react-redux';
import tasksActions from '../../redux/tasks/tasksActions';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList = ({ tasks, onRemoveTask, onUpdateTask }) => (
    <ul>
        {tasks.map(({ id, text, complited }) => (
            <TaskListItem
                key={id}
                text={text}
                complited={complited}
                onRemove={() => onRemoveTask(id)}
                onUpdate={() => onUpdateTask(id)}
            />
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

const mapDispatchToProps = {
    onRemoveTask: tasksActions.removeTask,
    onUpdateTask: tasksActions.toggleCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

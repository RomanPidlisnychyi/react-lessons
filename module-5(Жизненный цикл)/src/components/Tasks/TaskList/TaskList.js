import React from 'react';
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

export default TaskList;

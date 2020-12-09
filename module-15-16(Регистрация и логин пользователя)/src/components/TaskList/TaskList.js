import React from 'react';
import { connect } from 'react-redux';
import TaskListItem from '../TaskListItem/TaskListItemContainer';
import tasksSelectors from '../../redux/tasks/tasksSelectors';

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(({ id }) => (
                <TaskListItem key={id} id={id} />
            ))}
        </ul>
    );
};

const mapStateToProps = state => ({
    tasks: tasksSelectors.getVisibleTasks(state),
});

export default connect(mapStateToProps)(TaskList);

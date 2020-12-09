import { connect } from 'react-redux';
import tasksOperations from '../../redux/tasks/tasksOperations';
import tasksSelectors from '../../redux/tasks/tasksSelectors';
import TaskListItem from './TaskListItem';

const mapStateToProps = (state, ownProps) => ({
    ...tasksSelectors.getTaskById(state, ownProps.id),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemoveTask: () => dispatch(tasksOperations.removeTask(ownProps.id)),
    onToggleCompleted: () =>
        dispatch(tasksOperations.toggleCompleted(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);

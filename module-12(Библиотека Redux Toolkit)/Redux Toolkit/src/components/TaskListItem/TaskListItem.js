import React from 'react';
import { connect } from 'react-redux';
import tasksActions from '../../redux/tasks/tasksActions';
import styled from 'styled-components';

const ListItem = styled.li`
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    justify-content: space-between;
`;

const ControlWrap = styled.section`
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const TaskListItem = ({ text, complited, onRemoveTask, onToggleCompleted }) => {
    return (
        <ListItem>
            <p>{text}</p>

            <ControlWrap>
                <label>
                    <input
                        type="checkbox"
                        checked={complited}
                        onChange={onToggleCompleted}
                    />
                    Complited
                </label>
                <button type="button" onClick={onRemoveTask}>
                    Удалить
                </button>
            </ControlWrap>
        </ListItem>
    );
};

const mapStateToProps = (state, ownProps) => {
    const item = state.tasks.items.find(item => item.id === ownProps.id);
    return {
        ...item,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onRemoveTask: () => dispatch(tasksActions.removeTask(ownProps.id)),
    onToggleCompleted: () =>
        dispatch(tasksActions.toggleCompleted(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskListItem);

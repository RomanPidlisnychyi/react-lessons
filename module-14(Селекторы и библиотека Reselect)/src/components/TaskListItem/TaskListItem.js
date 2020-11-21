import React from 'react';
import { ListItem, ControlWrap } from './styles';

const TaskListItem = ({ text, completed, onRemoveTask, onToggleCompleted }) => {
    return (
        <ListItem>
            <p>{text}</p>

            <ControlWrap>
                <label>
                    <input
                        type="checkbox"
                        checked={completed}
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

export default TaskListItem;

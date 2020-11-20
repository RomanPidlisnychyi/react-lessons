import React from 'react';
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

export default function TaskListItem({ text, complited, onRemove, onUpdate }) {
    return (
        <ListItem>
            <p>{text}</p>

            <ControlWrap>
                <label>
                    <input
                        type="checkbox"
                        checked={complited}
                        onChange={onUpdate}
                    />
                    Complited
                </label>
                <button type="button" onClick={onRemove}>
                    Удалить
                </button>
            </ControlWrap>
        </ListItem>
    );
}

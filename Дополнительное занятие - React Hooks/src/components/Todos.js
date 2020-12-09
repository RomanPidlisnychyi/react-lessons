import React, { useState, useReducer, useMemo } from 'react';

const todosReduser = (state, action) => {
    switch (action.type) {
        case 'addTodo':
            return [...state, action.payload.todo];

        case 'removeTodo':
            return state.filter(el => el.id !== action.payload.todoId);

        default:
            return state;
    }
};

export default function Todos() {
    const [todos, dispatch] = useReducer(todosReduser, []);

    const [text, setText] = useState('');

    const handleText = e => setText(e.target.value);

    const addTodo = () => {
        const todo = {
            id: Date.now(),
            text,
        };
        dispatch({ type: 'addTodo', payload: { todo } });
        setText('');
    };

    const removeTodo = todoId => {
        dispatch({ type: 'removeTodo', payload: { todoId } });
    };

    const [filter, setFilter] = useState('');

    const changeFilter = e => setFilter(e.target.value);

    const filtredTodos = useMemo(
        () =>
            todos.filter(todo =>
                todo.text.toLowerCase().includes(filter.toLowerCase()),
            ),
        [todos, filter],
    );

    return (
        <>
            <input type="text" onChange={handleText} value={text} />

            <br />
            <button type="button" onClick={addTodo}>
                Add todo
            </button>

            <br />
            <input type="text" onChange={changeFilter} value={filter} />

            <ul>
                {filtredTodos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button
                            type="button"
                            onClick={() => removeTodo(todo.id)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

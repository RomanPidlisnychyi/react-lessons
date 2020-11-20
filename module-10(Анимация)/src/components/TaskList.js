import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'react-uuid';

const tasks = [
    {
        text: 'I am a task',
        id: uuid(),
    },
    {
        text: 'I am a task',
        id: uuid(),
    },
    {
        text: 'I am a task',
        id: uuid(),
    },
    {
        text: 'I am a task',
        id: uuid(),
    },
];

export default class TaskList extends Component {
    state = {
        tasks: [],
        value: '',
    };

    componentDidMount() {
        this.setState({ tasks: tasks });
    }

    handlerInput = e => this.setState({ value: e.target.value });

    handlerSubmit = e => {
        e.preventDefault();
        const task = {
            text: this.state.value,
            id: uuid(),
        };
        this.setState(prevState => ({
            tasks: [...prevState.tasks, task],
            value: '',
        }));
    };

    handlerRemoveTask = taskId => {
        const tasks = this.state.tasks.filter(task => task.id !== taskId);
        this.setState({ tasks });
    };

    render() {
        const { tasks, value } = this.state;

        return (
            <div>
                <form onSubmit={this.handlerSubmit}>
                    <input
                        type="text"
                        value={value}
                        onChange={this.handlerInput}
                    />
                    <button type="submit">Add new task</button>
                </form>
                <TransitionGroup component="ul">
                    {tasks.map(task => (
                        <CSSTransition
                            key={task.id}
                            timeout={250}
                            classNames="TaskList-item-fade"
                        >
                            <li>
                                {task.text} of id: {task.id}
                                <button
                                    type="button"
                                    onClick={() =>
                                        this.handlerRemoveTask(task.id)
                                    }
                                >
                                    Delete
                                </button>
                            </li>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }
}

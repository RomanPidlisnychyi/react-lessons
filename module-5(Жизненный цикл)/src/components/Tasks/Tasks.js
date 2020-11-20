import React, { Component } from 'react';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Filter from './Filter/Filter';
import uuid from 'react-uuid';

export default class Tasks extends Component {
    state = {
        tasks: [],
        filter: '',
    };

    componentDidMount() {
        const persistedTasks = localStorage.getItem('tasks');

        if (persistedTasks) {
            this.setState({
                tasks: JSON.parse(persistedTasks),
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.tasks !== this.state.tasks) {
            localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
            if (this.state.tasks.length < 1) {
                localStorage.removeItem('tasks');
            }
        }
    }

    addTask = text => {
        const task = {
            id: uuid(),
            text,
            completed: false,
        };

        this.setState(prevState => {
            return {
                tasks: [...prevState.tasks, task],
            };
        });
    };

    removeTask = taskId => {
        this.setState(prevState => {
            return {
                tasks: prevState.tasks.filter(({ id }) => id !== taskId),
                filter: '',
            };
        });
    };

    updateComplited = taskId => {
        this.setState(prevState => ({
            tasks: prevState.tasks.map(task =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        }));
    };

    changeFilter = filter => {
        this.setState({ filter });
    };

    getVisibleTasks = () => {
        const { tasks, filter } = this.state;

        return tasks.filter(task =>
            task.text.toLowerCase().includes(filter.toLowerCase()),
        );
    };

    render() {
        const { tasks, filter } = this.state;

        const visibleTasks = this.getVisibleTasks();

        return (
            <>
                <TaskEditor onAddTask={this.addTask} />
                {tasks.length > 1 && (
                    <Filter value={filter} onChangeFilter={this.changeFilter} />
                )}
                {visibleTasks.length > 0 && (
                    <TaskList
                        tasks={visibleTasks}
                        onRemoveTask={this.removeTask}
                        onUpdateTask={this.updateComplited}
                    />
                )}
            </>
        );
    }
}

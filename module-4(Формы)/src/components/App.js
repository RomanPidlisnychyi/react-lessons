import React, { Component } from 'react';
import Layout from './Layout';
// import Counter from './Counter';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Filter from './Filter/Filter';
import uuid from 'react-uuid';

export default class App extends Component {
    state = {
        tasks: [],
        filter: '',
    };

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
            };
        });
    };

    // updateComplited = taskId => {
    //     this.setState(prevState => {
    //         return {
    //             tasks: prevState.tasks.map(task => {
    //                 if (task.id === taskId) {
    //                     return {
    //                         ...task,
    //                         completed: !task.completed,
    //                     };
    //                 }

    //                 return task;
    //             }),
    //         };
    //     });
    // };

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
            <Layout>
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
            </Layout>
        );
    }
}

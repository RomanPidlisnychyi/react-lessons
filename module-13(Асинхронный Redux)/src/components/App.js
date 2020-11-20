import React, { Component } from 'react';
import { connect } from 'react-redux';
import tasksOperations from '../redux/tasks/tasksOperations';
import Layout from './Layout';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Filter from './Filter/Filter';

class App extends Component {
    componentDidMount() {
        this.props.onFetchTasks();
    }

    render() {
        return (
            <Layout>
                {this.props.isLoadingTasks && (
                    <h2>Waiting response from server</h2>
                )}
                <TaskEditor />
                <Filter />
                <TaskList />
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    isLoadingTasks: state.tasks.loading,
});

const mapDispatchToProps = {
    onFetchTasks: tasksOperations.fetchTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

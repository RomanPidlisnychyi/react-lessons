import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tasksOperations, tasksSelectors } from '../redux/tasks';
import { counterActions, counterSelectors } from '../redux/counter';
import App from './App';

class WrappedApp extends Component {
    componentDidMount() {
        // this.props.onFetchTasks();
    }
    render() {
        return <App {...this.props} />;
    }
}

const mapStateToProps = state => ({
    isLoadingTasks: tasksSelectors.getLoading(state),
    counterValue: counterSelectors.getValue(state),
});

const mapDispatchToProps = {
    onFetchTasks: tasksOperations.fetchTasks,
    onIncrement: counterActions.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(WrappedApp);

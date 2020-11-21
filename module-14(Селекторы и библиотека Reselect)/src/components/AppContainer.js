import React, { Component } from 'react';
import { connect } from 'react-redux';
import tasksOperations from '../redux/tasks/tasksOperations';
import tasksSelectors from '../redux/tasks/tasksSelectors';
import counterActions from '../redux/counter/counterActions';
import counterSelectors from '../redux/counter/counterSelectors';
import App from './App';

class WrappedApp extends Component {
    componentDidMount() {
        this.props.onFetchTasks();
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

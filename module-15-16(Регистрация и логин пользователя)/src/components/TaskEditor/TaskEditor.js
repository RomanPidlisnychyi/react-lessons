import React, { Component } from 'react';
import { connect } from 'react-redux';
import tasksOperations from '../../redux/tasks/tasksOperations';

class TaskEditor extends Component {
    state = {
        text: '',
    };

    handleChange = e => {
        this.setState({ text: e.target.value });
    };

    handleForm = e => {
        e.preventDefault();
        this.props.onAddTask(this.state.text);
        this.setState({ text: '' });
    };
    render() {
        return (
            <form onSubmit={this.handleForm}>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <button type="submit">Сдулать замутку</button>
            </form>
        );
    }
}

const mapDispatchToProps = {
    onAddTask: tasksOperations.addTask,
};

export default connect(null, mapDispatchToProps)(TaskEditor);

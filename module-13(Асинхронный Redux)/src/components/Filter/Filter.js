import React from 'react';
import { connect } from 'react-redux';
import tasksActions from '../../redux/tasks/tasksActions';

function Filter({ value, onChangeFilter }) {
    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={e => onChangeFilter(e.target.value)}
            />
        </div>
    );
}

const mapStateToProps = state => ({ value: state.tasks.filter });

const mapDispatchToProps = {
    onChangeFilter: tasksActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

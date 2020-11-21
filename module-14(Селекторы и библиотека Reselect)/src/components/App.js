import React from 'react';
import Layout from './Layout';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Filter from './Filter/Filter';

const App = ({ onIncrement, counterValue, isLoadingTasks }) => (
    <Layout>
        <button type="button" onClick={() => onIncrement()}>
            Counter value: {counterValue}
        </button>
        <hr />
        {isLoadingTasks && <h2>Waiting response from server</h2>}
        <TaskEditor />
        <Filter />
        <TaskList />
    </Layout>
);

export default App;

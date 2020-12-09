import React from 'react';
import { Switch } from 'react-router-dom';
import Layout from './Layout';
import AppBar from './AppBar';
// import TaskList from './TaskList/TaskList';
// import TaskEditor from './TaskEditor/TaskEditor';
// import Filter from './Filter/Filter';
import routes from '../routes';
import PablicRotes from './common/Rotes/PablicRotes';
import PrivedRoutes from './common/Rotes/PrivedRoutes';

const App = ({ onIncrement, counterValue, isLoadingTasks }) => (
    <Layout>
        <AppBar />
        <Switch>
            {routes
                .filter(route => route.type === 'Prived')
                .map(route => (
                    <PrivedRoutes key={route.label} {...route} />
                ))}

            {routes
                .filter(route => route.type === 'Pablic')
                .map(route => (
                    <PablicRotes key={route.label} {...route} />
                ))}
        </Switch>

        {/* <button type="button" onClick={() => onIncrement()}>
                Counter value: {counterValue}
            </button>
            <hr />
            {isLoadingTasks && <h2>Waiting response from server</h2>}
            <TaskEditor />
            <Filter />
            <TaskList /> */}
    </Layout>
);

export default App;

import React from 'react';
import Layout from './Layout';
import TaskList from './TaskList/TaskList';
import TaskEditor from './TaskEditor/TaskEditor';
import Filter from './Filter/Filter';

const App = () => (
    <Layout>
        <TaskEditor />
        <Filter />
        <TaskList />
        {/* <TaskEditor onAddTask={this.addTask} />
                {tasks.length > 1 && (
                    <Filter value={filter} onChangeFilter={this.changeFilter} />
                )}
                {visibleTasks.length > 0 && (
                    <TaskList
                        tasks={visibleTasks}
                        onRemoveTask={this.removeTask}
                        onUpdateTask={this.updateComplited}
                    />
                )} */}
    </Layout>
);

export default App;

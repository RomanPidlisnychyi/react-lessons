import { createStore, combineReducers } from 'redux';
import tasksReducer from './tasks/tasksReducer';

const rootReduser = combineReducers({
    tasks: tasksReducer,
});

const store = createStore(
    rootReduser,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import tasksReducer from './tasks/tasksReducer';
import counterReducer from './counter/counterReducer';
import { authReducer } from './auth';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token', 'user'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        tasks: tasksReducer,
        counter: counterReducer,
    },
});

export const persistor = persistStore(store);

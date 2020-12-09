import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authActions from './authActions';

const initialState = { name: null, email: null, id: null };

const user = createReducer(initialState, {
    [authActions.registerSuccess]: (_, action) => ({
        name: action.payload.name,
        email: action.payload.email,
        id: null,
    }),
    [authActions.loginSuccess]: (_, action) => ({
        name: action.payload.user.name,
        email: action.payload.user.email,
        id: action.payload.user.id,
    }),
    [authActions.logoutSuccess]: (_, action) => initialState,
});

const token = createReducer(null, {
    [authActions.loginSuccess]: (_, action) => action.payload.token,
    [authActions.logoutSuccess]: () => null,
});

const authLoading = createReducer(false, {
    [authActions.registerRequest]: () => true,
    [authActions.registerSuccess]: () => false,
    [authActions.registerError]: () => false,
    [authActions.loginRequest]: () => true,
    [authActions.loginSuccess]: () => false,
    [authActions.loginError]: () => false,
});

const authError = createReducer(null, {
    [authActions.registerError]: (_, { payload }) => payload,
    [authActions.registerSuccess]: () => null,
    [authActions.loginError]: (_, { payload }) => payload,
    [authActions.loginSuccess]: () => null,
    [authActions.logoutError]: (_, { payload }) => payload,
    [authActions.logoutSuccess]: () => null,
    [authActions.getCurrentUserError]: (_, { payload }) => payload,
    [authActions.getCurrentUserSuccess]: () => null,
});

export default combineReducers({
    user,
    token,
    authError,
    authLoading,
});

import { createReducer } from '@reduxjs/toolkit';
import counterActions from './counterActions';

const counterReducer = createReducer(0, {
    [counterActions.increment]: (state, action) => state + 1,
});

export default counterReducer;

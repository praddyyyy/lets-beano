
import { combineReducers } from '@reduxjs/toolkit';
import clubDataReducer from './features/clubDataSlice';
import clubFilterReducer from './features/clubFilterSlice';
import clubSortReducer from './features/clubSortSlice';

const rootReducer = combineReducers({
    clubData: clubDataReducer,
    clubFilter: clubFilterReducer,
    clubSort: clubSortReducer,
});

export default rootReducer;
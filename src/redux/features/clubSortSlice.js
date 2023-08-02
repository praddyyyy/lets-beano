import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    sortBy: 'rating', // Default sort option is by rating
    sortOrder: 'desc', // Default sort order is descending
    sortByIndex: 0,
};

const clubSortSlice = createSlice({
    name: 'clubSort',
    initialState,
    reducers: {
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setSortOrder: (state, action) => {
            state.sortOrder = action.payload;
        },
        setSortByIndex: (state, action) => {
            state.sortByIndex = action.payload;
        },
        resetSort: (state) => {
            state.sortBy = 'rating'; // Reset to the default sort option
            state.sortOrder = 'desc'; // Reset to the default sort order
            state.sortByIndex = 0;
        },
    },
});

export const {
    setSortBy,
    setSortOrder,
    setSortByIndex,
} = clubSortSlice.actions;

export default clubSortSlice.reducer;
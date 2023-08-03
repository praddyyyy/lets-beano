import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    priceFilter: [0, 5000],
    // ratingFilter: null,
    // tagsFilter: [],
};

const clubFilterSlice = createSlice({
    name: 'clubFilter',
    initialState,
    reducers: {
        setPriceFilter: (state, action) => {
            state.priceFilter = action.payload;
        },
        resetFilter: (state) => {
            state.priceFilter = [0, 5000];
            // state.ratingFilter = null;
            // state.tagsFilter = [];
        },
    }
});

export const {
    setPriceFilter,
    // setRatingFilter,
    // setTagsFilter,
    resetFilter,
} = clubFilterSlice.actions;

export default clubFilterSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    priceFilter: [0, 5000],
    categoriesTagsFilter: [],
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
        addCategoriesTagsFilter: (state, action) => {
            state.categoriesTagsFilter = [...state.categoriesTagsFilter, action.payload];
        },
        removeCategoriesTagsFilter: (state, action) => {
            state.categoriesTagsFilter = state.categoriesTagsFilter.filter((item) => item !== action.payload);
        },
        resetFilter: (state) => {
            state.priceFilter = [0, 5000];
            state.categoriesTagsFilter = [];
            // state.ratingFilter = null;
            // state.tagsFilter = [];
        },
    }
});

export const {
    setPriceFilter,
    addCategoriesTagsFilter,
    removeCategoriesTagsFilter,
    // setRatingFilter,
    // setTagsFilter,
    resetFilter,
} = clubFilterSlice.actions;

export default clubFilterSlice.reducer;
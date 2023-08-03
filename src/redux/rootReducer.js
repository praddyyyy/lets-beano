
import { combineReducers } from '@reduxjs/toolkit';
import clubDataReducer from './features/clubs/clubDataSlice';
import clubFilterReducer from './features/clubs/clubFilterSlice';
import clubSortReducer from './features/clubs/clubSortSlice';
import homeCarouselReducer from './features/home/homeCarouselSlice';
import homeOffersSlice from './features/home/homeOffersSlice';
import homeTrendingSlice from './features/home/homeTrendingSlice';
import homeExclusiveSlice from './features/home/homeExclusiveSlice';

const rootReducer = combineReducers({
    clubData: clubDataReducer,
    clubFilter: clubFilterReducer,
    clubSort: clubSortReducer,
    homeCarousel: homeCarouselReducer,
    homeOffers: homeOffersSlice,
    homeTrending: homeTrendingSlice,
    homeExclusive: homeExclusiveSlice
});

export default rootReducer;
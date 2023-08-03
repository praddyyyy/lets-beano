import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../../firebase-config'
import { collection, getDocs } from "firebase/firestore";

// Async thunk to fetch data from Firestore
export const fetchHomeCarouselDataFromFirestore = createAsyncThunk(
    'homeCarousel/fetchData',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'home_carousel'));
            const homeCarousel = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            return homeCarousel;
        } catch (error) {
            console.error('Failed to retrieve data', error);
            throw error; // Rethrow the error so it can be caught in the thunk action
        }
    }
);

const homeCarouselSlice = createSlice({
    name: 'homeCarousel',
    initialState: {
        homeCarousel: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeCarouselDataFromFirestore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHomeCarouselDataFromFirestore.fulfilled, (state, action) => {
                state.loading = false;
                state.homeCarousel = action.payload;
                state.error = null;
            })
            .addCase(fetchHomeCarouselDataFromFirestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default homeCarouselSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../../firebase-config'
import { collection, getDocs } from "firebase/firestore";

// Async thunk to fetch data from Firestore
export const fetchHomeOffersDataFromFirestore = createAsyncThunk(
    'homeOffers/fetchData',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'home_offers'));
            const homeOffers = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            return homeOffers;
        } catch (error) {
            console.error('Failed to retrieve data', error);
            throw error; // Rethrow the error so it can be caught in the thunk action
        }
    }
);

const homeOffersSlice = createSlice({
    name: 'homeOffers',
    initialState: {
        homeOffers: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeOffersDataFromFirestore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHomeOffersDataFromFirestore.fulfilled, (state, action) => {
                state.loading = false;
                state.homeOffers = action.payload;
                state.error = null;
            })
            .addCase(fetchHomeOffersDataFromFirestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default homeOffersSlice.reducer;
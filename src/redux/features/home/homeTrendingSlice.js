import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../../firebase-config'
import { collection, getDocs } from "firebase/firestore";

// Async thunk to fetch data from Firestore
export const fetchHomeTrendingDataFromFirestore = createAsyncThunk(
    'homeTrending/fetchData',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'home_trending'));
            const homeTrending = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            return homeTrending;
        } catch (error) {
            console.error('Failed to retrieve data', error);
            throw error; // Rethrow the error so it can be caught in the thunk action
        }
    }
);

const homeTrendingSlice = createSlice({
    name: 'homeTrending',
    initialState: {
        homeTrending: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeTrendingDataFromFirestore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHomeTrendingDataFromFirestore.fulfilled, (state, action) => {
                state.loading = false;
                state.homeTrending = action.payload;
                state.error = null;
            })
            .addCase(fetchHomeTrendingDataFromFirestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default homeTrendingSlice.reducer;
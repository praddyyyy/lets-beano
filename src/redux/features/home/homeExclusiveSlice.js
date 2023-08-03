import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../../firebase-config'
import { collection, getDocs } from "firebase/firestore";

// Async thunk to fetch data from Firestore
export const fetchHomeExclusiveDataFromFirestore = createAsyncThunk(
    'homeExclusive/fetchData',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'home_exclusive'));
            const homeExclusive = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            return homeExclusive;
        } catch (error) {
            console.error('Failed to retrieve data', error);
            throw error; // Rethrow the error so it can be caught in the thunk action
        }
    }
);

const homeExclusiveSlice = createSlice({
    name: 'homeExclusive',
    initialState: {
        homeExclusive: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeExclusiveDataFromFirestore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchHomeExclusiveDataFromFirestore.fulfilled, (state, action) => {
                state.loading = false;
                state.homeExclusive = action.payload;
                state.error = null;
            })
            .addCase(fetchHomeExclusiveDataFromFirestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default homeExclusiveSlice.reducer;
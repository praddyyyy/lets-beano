import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../../firebase-config'
import { collection, getDocs } from "firebase/firestore";

// Async thunk to fetch data from Firestore
export const fetchArtistsDataFromFirestore = createAsyncThunk(
    'artists/fetchData',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'artists'));
            const artistsData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            return artistsData;
        } catch (error) {
            console.error('Failed to retrieve data', error);
            throw error; // Rethrow the error so it can be caught in the thunk action
        }
    }
);

const artistsDataSlice = createSlice({
    name: 'artists',
    initialState: {
        artistsData: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtistsDataFromFirestore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchArtistsDataFromFirestore.fulfilled, (state, action) => {
                state.loading = false;
                state.artistsData = action.payload;
                state.error = null;
            })
            .addCase(fetchArtistsDataFromFirestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default artistsDataSlice.reducer;
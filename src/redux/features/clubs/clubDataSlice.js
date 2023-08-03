import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../../../firebase-config'
import { collection, getDocs } from "firebase/firestore";

// Function to convert the geolocation object to a serializable format
const serializeGeoLocation = (location) => {
    if (location) {
        return {
            latitude: location.latitude,
            longitude: location.longitude,
        };
    }
    // If location is undefined or null, handle it accordingly, e.g., return a default value.
    return { latitude: 0, longitude: 0 };
};

// Async thunk to fetch data from Firestore
export const fetchClubDataFromFirestore = createAsyncThunk(
    'clubs/fetchData',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'clubs'));
            const clubData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, location: serializeGeoLocation(doc.location) }));
            return clubData;
        } catch (error) {
            console.error('Failed to retrieve data', error);
            throw error; // Rethrow the error so it can be caught in the thunk action
        }
    }
);

const clubDataSlice = createSlice({
    name: 'clubs',
    initialState: {
        clubData: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchClubDataFromFirestore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchClubDataFromFirestore.fulfilled, (state, action) => {
                state.loading = false;
                state.clubData = action.payload;
                state.error = null;
            })
            .addCase(fetchClubDataFromFirestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default clubDataSlice.reducer;
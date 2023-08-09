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

const serializeTimestamp = (timestamp) => {
    if (timestamp) {
        return timestamp.toDate().toISOString();
    }
    return null;
};

// Async thunk to fetch data from Firestore
export const fetchEventDataFromFirestore = createAsyncThunk(
    'events/fetchData',
    async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'events'));
            const eventData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id, location: serializeGeoLocation(doc.data().location), start_time: serializeTimestamp(doc.data().start_time), end_time: serializeTimestamp(doc.data().end_time) }));
            return eventData;
        } catch (error) {
            console.error('Failed to retrieve data', error);
            throw error; // Rethrow the error so it can be caught in the thunk action
        }
    }
);

const eventDataSlice = createSlice({
    name: 'events',
    initialState: {
        eventData: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventDataFromFirestore.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchEventDataFromFirestore.fulfilled, (state, action) => {
                state.loading = false;
                state.eventData = action.payload;
                state.error = null;
            })
            .addCase(fetchEventDataFromFirestore.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default eventDataSlice.reducer;
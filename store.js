import { configureStore } from '@reduxjs/toolkit'
import ticketReducer from './features/ticketSlice'

export default configureStore({
    reducer: {
        ticket: ticketReducer,
    }
})
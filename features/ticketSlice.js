import { createSlice } from '@reduxjs/toolkit'

export const ticketSlice = createSlice({
    name: 'ticket',
    initialState: {
        tickets: []
    },
    reducers: {
        addTicket: (state, action) => {
            state.tickets = [...state.tickets, action.payload]
        },
        removeTicket: (state, action) => {
            const index = state.tickets.findIndex((ticket) => ticket.id === action.payload.id)
            const newTicket = [...state.tickets]

            if (index >= 0) {
                newTicket.splice(index, 1)
            } else {
                console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in basket!`)
            }

            state.tickets = newTicket
        },
    }
})

// Action creators are generated for each case reducer function
export const { addTicket, removeTicket } = ticketSlice.actions

export const selectTicket = (state) => state.ticket.tickets

export const selectTicketWithId = (state, id) => state.ticket.tickets.filter((ticket) => ticket.id === id)

export const selectTicketTotal = (state) => state.ticket.tickets.reduce((total, ticket) => total + ticket.price, 0) 

export default ticketSlice.reducer
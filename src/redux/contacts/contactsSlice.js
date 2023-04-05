import { createSlice } from "@reduxjs/toolkit"

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contactsList: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        add(state, action) {
            state.contactsList.push(action.payload)
        },
        remove(state, action) {
            state.contactsList = state.contactsList.filter(contact => contact.id !== action.payload)
        },
    }
})

export const contactsReducer =  contactsSlice.reducer;

export const { add, remove } = contactsSlice.actions;

export const getContacts = state => state.contacts.contactsList;
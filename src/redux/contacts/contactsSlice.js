import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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

const persistConfig = {
    key: 'contacts',
    storage,
}

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { add, remove } = contactsSlice.actions;

export const getContacts = state => state.contacts.contactsList;
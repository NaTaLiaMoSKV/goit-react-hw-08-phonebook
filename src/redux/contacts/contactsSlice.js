import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contactsList: []
    },
    reducers: {
        add(state, action) {
            const { id, name, number } = action.payload; 

            state.contactsList.push({ id, name, number })
        },
        remove(state, action) {
            // удаляется не нужный элемент массива, а весь массив contactsList
            return state.contactsList.filter(contact => contact.id !== action.payload)
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
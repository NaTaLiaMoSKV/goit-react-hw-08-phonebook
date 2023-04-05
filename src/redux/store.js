import { configureStore } from "@reduxjs/toolkit"
import { filterSlice } from './filter/filterSlice'
import { contactsReducer } from './contacts/contactsSlice'

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        contacts: contactsReducer,
    },
}) 


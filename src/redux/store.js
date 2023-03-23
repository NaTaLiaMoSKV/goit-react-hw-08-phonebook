import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore } from "@reduxjs/toolkit"
import { filterSlice } from './filter/filterSlice'
import { contactsReducer } from './contacts/contactsSlice'

export const store = configureStore({
    reducer: {
        filter: filterSlice.reducer,
        contacts: contactsReducer,
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
    }
}) 

export const persistor = persistStore(store);


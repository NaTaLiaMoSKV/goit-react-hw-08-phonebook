import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: [
        { id: '12432', name: 'natalia', number: '0685703758' },
        { id: '5342', name: 'ivan', number: '045803495' }
    ],
    reducers: {
        add(state, action) {
            const { id, name, number } = action.payload; 

            state.push({ id, name, number })
        },
        remove(state, action) {
            return state.filter(contact => contact.id !== action.payload);
        },
    }
})


export const { add, remove } = contactsSlice.actions;
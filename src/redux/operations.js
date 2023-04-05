import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://642d754ebf8cbecdb406cdc6.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = axios.get('/contacts');
            console.log(response.data);
            return response.data
        }
        catch(e) {
            
        }
    }
)
export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (task, thunkAPI) => {
        try {
            const response = axios.post('/contacts', { task });
            return response.data;
        }
        catch(e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = axios.delete('/contacts', { contactId });
            return response.data
        }
        catch(e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    loading: false,
    calendarEvents: [],
    error: ""
}

export const getAllCalendarEvents = createAsyncThunk("calendarEvent/getAllCalendarEvents", async () => {
    const res = await axios("http://localhost:4000/api/calendarEvents")
    .then(res => {
        return res.data.map(event => event)
    })
    .catch(err => console.log(err))
    return res
})

const getAllCalendarEventsSliceReducer = createSlice({
    name: "calendarEvent",
    initialState,
    extraReducers: builder =>  {
        builder.addCase(getAllCalendarEvents.pending, state => {
            state.loading = true
            state.error = null
        })
        builder.addCase(getAllCalendarEvents.fulfilled, (state, action) => {
            state.loading = false
            state.calendarEvents = action.payload
        })
        builder.addCase(getAllCalendarEvents.rejected, (state, action) => {
            state.loading = false
            state.calendarEvents = null
            state.error = action.error.message
        })
    }
})

export default getAllCalendarEventsSliceReducer.reducer
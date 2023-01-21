import { configureStore } from "@reduxjs/toolkit"
import getAllCalendarEventsSliceReducer from "../features/calendarEventSlice"

const store = configureStore({
  reducer: {
    getAllEvents: getAllCalendarEventsSliceReducer,
  },
})

export default store

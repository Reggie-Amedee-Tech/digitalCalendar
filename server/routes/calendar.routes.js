const CalendarEvents = require('../controller/calendar.controller')

module.exports = function(app){
app.post("/api/calendarEvent/createEvent", CalendarEvents.createEvent)
app.put("/api/calendarEvent/:id", CalendarEvents.updateEvent)
app.get("/api/calendarEvents", CalendarEvents.getAllEvents)
app.delete("/api/calendarEvent/:id/deleteEvent", CalendarEvents.deleteEvent)
}
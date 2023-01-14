const CalendarEvents = require('../controller/calendar.controller')
const { authenticate } = require("../auth")

module.exports = function(app){
app.post("/api/calendarEvent/createEvent", authenticate, CalendarEvents.createEvent)
app.put("/api/calendarEvent/:id", CalendarEvents.updateEvent)
app.get("/api/calendarEvents", CalendarEvents.getAllEvents)
app.delete("/api/calendarEvent/:id/deleteEvent", CalendarEvents.deleteEvent)
}
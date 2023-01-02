const CalendarEvents = require('../controller/calendar.controller')

module.exports = function(app){
app.post("/api/calendarEvent/createEvent", CalendarEvents.createEvent)
}
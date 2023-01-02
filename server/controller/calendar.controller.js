const CalendarEvents = require('../models/calendar.model')

module.exports.createEvent = (request, response) => {
    const {eventName, eventDetails} = request.body;
    CalendarEvents.create({
        eventName,
        eventDetails
    })
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}
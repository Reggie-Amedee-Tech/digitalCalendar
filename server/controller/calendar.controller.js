const CalendarEvents = require('../models/calendar.model')

module.exports.createEvent = (request, response) => {
    const {eventName, eventDetails, eventStartDate} = request.body;
    CalendarEvents.create({
        eventName,
        eventDetails,
        eventStartDate
    })
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}

module.exports.getAllEvents = (request,response) => {
    CalendarEvents.find()
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}

module.exports.updateEvent = (request,response) => {
    CalendarEvents.findOneAndUpdate({_id: request.params.id}, request.body, {new: true})
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}

module.exports.deleteEvent = (request, response) => {
    CalendarEvents.deleteOne({_id: request.params.id})
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}


const CalendarEvents = require('../models/calendar.model')
const jwt = require("jsonwebtoken")

module.exports.createEvent = (request, response) => {
    const {eventName, eventDetails, eventDate} = request.body;
    const decodedJwt = jwt.decode(request.cookies.RANDOM_TOKEN, {complete: true})
    const userId = decodedJwt.payload.userId
    console.log(userId)
    CalendarEvents.create({
        eventName,
        eventDetails,
        eventDate,
        createdBy: userId
    })
    .then(res => response.json(res).status(200))
    .catch(err => response.json(err).status(400))
}

module.exports.getAllEvents = (request,response) => {
    // const decodedJwt = jwt.decode(request.cookies.RANDOM_TOKEN, {complete: true})
    // const userId = decodedJwt.payload.userId
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


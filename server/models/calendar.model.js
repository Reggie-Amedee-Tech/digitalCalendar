const mongoose = require('mongoose');

const CalendarEvent = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },

    eventDetails: {
        type: String,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

module.exports = mongoose.model("CalendarEvent", CalendarEvent);
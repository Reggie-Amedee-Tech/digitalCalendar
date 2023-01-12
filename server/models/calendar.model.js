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

    eventDate: {
        type: Date,
        required: true
    },

    completed: {
        type: Boolean,
        default: false
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports = mongoose.model("CalendarEvent", CalendarEvent);
const mongoose = require('mongoose');

const travellerSchema = new mongoose.Schema({
    name: String,
    lastLocation: {
        type: Array,
        required: true
    },
    createdAt: Date
});

module.exports = mongoose.model('Traveler', travellerSchema);
const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name: String,
    price: Number,
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
})

module.exports = mongoose.model('Movie', MovieSchema);

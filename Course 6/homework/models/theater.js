const chalk = require('chalk')
const mongoose = require ('mongoose')

const TheaterSchema = new mongoose.Schema({
  name: String,
  totalSales: Number,
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
})

module.exports = mongoose.model('Theater',TheaterSchema)

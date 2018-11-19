const fs = require ('fs')
const {parse, stringify} = require('flatted/cjs')

const MovieModel = require ('../models/movie')
const PersonModel = require ('../models/person')

async function addMovie(movie){
    return MovieModel.create(movie)
} 

async function addPerson(movieId, personId){
    const movie = await MovieModel.findOne({ _id: movieId })
    const person = await PersonModel.findOne({ _id: personId })

    movie.attendees.push(person)

    await movie.save()
    return movie
} 

async function findAll(){
    return MovieModel.find().populate('attendees')
} 

async function loadById(movieId){
    return MovieModel.findOne({ _id: movieId }).populate('attendies')
}   

async function loadByName(movieName){
    return MovieModel.find({name: movieName}).populate('attendies')
} 

async function deleteMovie(movieId){
   return MovieModel.remove({_id: movieId})
}   


module.exports = {
    addMovie,
    addPerson,
    findAll,
    loadById,
    loadByName,
    deleteMovie
}

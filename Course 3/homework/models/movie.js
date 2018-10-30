const chalk = require('chalk');
const Person = require('./person')
const Theater = require('./theater')

module.exports = class Movie{
    constructor(name,price,theater){
        this.name = name
        this.price = price
        this.theater = theater
        this.audience = []
        }
  
  static attendies(movie){
    let attendies = [];
    (movie.audience).forEach(function(x){
        attendies.push(x.name)
    })
    attendies =  attendies.reduce((accumulator, currentValue) => accumulator + "," + currentValue)
    console.log (chalk.yellow(`The movie ${this.name} is being attended by ${attendies}.`))
  }

  static create({ name, price, theater, audience}){
      const movie = new Movie( name, price)
      movie.theater = Theater.create(theater)
      movie.audience = audience.map(Person.create)
      return movie
    }
}
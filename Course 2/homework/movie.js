const chalk = require('chalk');

module.exports = class Movie{
    constructor(name,price){
        this.name = name
        this.price = price
        this.audience = []
        }
  
  attendies(){
    let attendies = [];
    (this.audience).forEach(function(x){
        attendies.push(x.name)
    })
    attendies =  attendies.reduce((accumulator, currentValue) => accumulator + "," + currentValue)
    console.log (chalk.yellow(`The movie ${this.name} is being attended by ${attendies}.`))
  }
}
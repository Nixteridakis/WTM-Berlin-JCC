const chalk = require('chalk')

module.exports = class Theater {
    constructor(name){
      this.name = name
      this.totalSales = 0
    }
    
    static sales(Theater){
      console.log (chalk.blue(`The total sales of ${Theater.name} is $${Theater.totalSales}`))
    }

    static add(theater,price){
      theater.totalSales += price
    }
    
    static create({ name, totalSales }) {
      const newCinemas = new Theater(name)
      newCinemas.totalSales = totalSales
      return newCinemas
    }
  }
  
const chalk = require('chalk');

module.exports = class Theater {
    constructor(name){
      this.name = name
      this.totalSales = 0
    }
    sales(){
      console.log (chalk.blue(`The total sales of ${this.name} is $${this.totalSales}`))
    }
    add(price){
      this.totalSales += price
    }
  }
  
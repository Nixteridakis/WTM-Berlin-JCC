const Person = require('./person')
const Meetup = require('./meetup')
const Chalk = require('chalk')
const Database = require ('./database')

const add = (num1, num2) => num1 + num2
const multiply = (num1, num2) => num1 * num2
const addResult = add(4,7)
const multResult = multiply(2,3)


  const mert = new Person ('Mert', 33)
  const armagan = new Person('Armagan',40)

  const wtmb = new Meetup('Women Tech Makers Berlin', 'Eurostaff')

  armagan.attend(wtmb)
  mert.attend(wtmb)
  Database.save('wtmb')
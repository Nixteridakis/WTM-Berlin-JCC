const Theater = require ('./theater')
const Shop = require ('./shop')

module.exports = class Person {
    constructor(name,age){
        this.name = name
        this.age = age
        this.shopped = []

    }

    static buyTicketFor(person,movie,theater){
      movie.audience.push(person)
      Theater.add(theater,movie.price)
    }
  
    static shop(person,item,theater){
      person.shopped.push(item)
      Theater.add(theater,item.price)
    }

    static create({ name, age, shopped }){
      const newPerson = new Person(name,age)
      newPerson.shopped = shopped.map(Shop.create)
      return newPerson
    }
}
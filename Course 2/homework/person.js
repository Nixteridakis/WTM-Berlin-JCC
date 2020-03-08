module.exports = class Person {
    constructor(name,age){
        this.name = name
        this.age = age
        this.shopped = []
        this.watching = null
        this.theater = null
        
    }

    buyTicketFor(movie,theater){
      movie.audience.push(this)
      this.watching = movie
      this.theater = theater
      theater.add(movie.price)
    }
  
    shop(item){
      this.shopped.push(item)
      this.theater.add(item.price)
    }
}
const Person = class {
    constructor(name,age){
        this.name = name
        this.age = age
        this.shopped = []
        this.watching = null
    }

    buyTicketFor(movie){
      movie.audience.push(this);
      this.watching = movie;
      MaxCinemas.add(movie.price)
    }
  
    shop(item){
      this.shopped.push(item)
      MaxCinemas.add(item.price)
    }
}

const Movie = class {
    constructor(name,price){
        this.name = name
        this.price = price
        this.audience = [];
    }
    
  
  attendies(){
    return (this.audience)
  }
}

const Shop_Item = class {
    constructor(name,price){
        this.name = name
        this.price = price
    }
}

const Theater = class {
  constructor(name){
    this.name = name
    this.total = 0
  }
  sales(){
    return (this.total)
  }
  add(price){
    this.total += price
  }
}

const MaxCinemas = new Theater('Max Cinemas');
const Jake = new Person ('Jake',20)
const Mary = new Person ('Mary',45)
const Paul = new Person ('Paul',12)
const Titans = new Movie ('Titans',7)
const TheDeuce = new Movie ('The Deuce',8)
const candy = new Shop_Item ('candy',3.45)
const popcorn = new Shop_Item ('pop_corn',5.00)

Jake.buyTicketFor(Titans)
Jake.shop(candy)
Mary.buyTicketFor(TheDeuce)
Paul.buyTicketFor(Titans)
Paul.shop(popcorn)

Titans.attendies()
MaxCinemas.sales() 

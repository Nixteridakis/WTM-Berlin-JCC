
const Person = require ('./models/person')
const Theater = require ('./models/theater')
const Shop = require ('./models/shop')
const Movie = require ('./models/movie')
const Database = require('./database')
const PDF = require('./createPDF')

const MaxCinemas = new Theater('Max Cinemas');
const Jake = new Person ('Jake',20)
const Mary = new Person ('Mary',45)
const Paul = new Person ('Paul',12)
const Titans = new Movie ('Titans',7, MaxCinemas)
const TheDeuce = new Movie ('The Deuce',8,MaxCinemas)
const candy = new Shop ('candy',3.45)
const popcorn = new Shop ('pop corn',5.00)


Person.buyTicketFor(Jake,Titans,MaxCinemas)
Person.shop(Jake,candy,MaxCinemas)
Person.buyTicketFor(Mary,TheDeuce,MaxCinemas)
Person.shop(Mary,popcorn,MaxCinemas)
Person.buyTicketFor(Paul,Titans,MaxCinemas)
Person.shop(Paul,candy,MaxCinemas)

Movie.attendies(Titans)
Theater.sales(MaxCinemas) 
PDF.print(MaxCinemas,Jake,Paul,Mary)
Database.save(Titans)

const load = async () => { 
    const movieLoad = await Database.load('Titans')
    const Titans2 = Movie.create(movieLoad)
}

load()
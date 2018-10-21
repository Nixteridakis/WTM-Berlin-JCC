
const Person = require ('./person')
const Theater = require ('./theater')
const Shop = require ('./shop')
const Movie = require ('./movie')
const Database = require('./database')
const PDF = require('./createPDF')

const MaxCinemas = new Theater('Max Cinemas');
const Jake = new Person ('Jake',20)
const Mary = new Person ('Mary',45)
const Paul = new Person ('Paul',12)
const Titans = new Movie ('Titans',7)
const TheDeuce = new Movie ('The Deuce',8)
const candy = new Shop ('candy',3.45)
const popcorn = new Shop ('pop corn',5.00)

/* A person can buy Ticket for a particular movie on a particular Theater therefore the items
a person can buy can only be related to that theater and not have to be specified*/

/* The application can be scalable in terms of a person going to multiple theaters in a single day 
    or/and on multiple days.*/

/* For terms of simplicity the arguemnts of the PDF have been sent individually and not stored in an array */
Jake.buyTicketFor(Titans,MaxCinemas)
Jake.shop(candy)
Mary.buyTicketFor(TheDeuce,MaxCinemas)
Mary.shop(popcorn)
Paul.buyTicketFor(Titans,MaxCinemas)
Paul.shop(popcorn)

Titans.attendies()
MaxCinemas.sales() 
Database.save(MaxCinemas)
Database.load()
PDF.print(MaxCinemas,Jake,Paul,Mary)

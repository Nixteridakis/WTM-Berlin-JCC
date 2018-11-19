const express = require('express')
const bodyParser = require('body-parser')

const movieService = require('./services/movie-services')
const personService = require('./services/person-services')
const shopService = require('./services/shop-services')
const theaterService = require('./services/theater-services')


const app = express()

require('./mongo-connection')

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

//movie requests

app.post('/movie', async (req, res) => {
    const movie = await movieService.addMovie(req.body)
    res.send(movie)
  })

app.get('/movies', async (req, res) => {
    const movies = await movieService.findAll()
    res.send(movies)
})
  
app.get('/movie/:id', async (req, res) => {
    const movie = await movieService.loadById(req.params.id)
    res.send(movie)
})

app.delete('/movie/:id', async (req, res) => {
    const movie = await movieService.deleteMovie(req.params.id)
    res.send(movie)
})

//person requests

app.post('/person', async (req, res) => {
    const person = await personService.add(req.body)
    res.send(person)
})

app.get('/people', async (req, res) => {
    const people = await personService.findAll()
    res.send(people)
})
  
app.get('/person/:id', async (req, res) => {
    const person = await personService.loadById(req.params.id)
    res.send(person)
})

app.delete('/person/:id', async (req, res) => {
    const person = await personService.deletePerson(req.params.id)
    res.send(person)
})

//shop requests

app.post('/item', async (req, res) => {
    const item = await shopService.add(req.body)
    res.send(item)
})

app.get('/shop', async (req, res) => {
    const shop = await shopService.findAll()
    res.send(shop)
})
  
app.get('/item/:id', async (req, res) => {
    const item = await shopService.loadById(req.params.id)
    res.send(item)
})

app.delete('/item/:id', async (req, res) => {
    const item = await shopService.deleteItem(req.params.id)
    res.send(item)
})

//theather requests

app.post('/theater', async (req, res) => {
    const theater = await theaterService.add(req.body)
    res.send(theater)
})

app.get('/theaters', async (req, res) => {
    const theater = await theaterService.findAll()
    res.send(theater)
})
  
app.get('/theater/:id', async (req, res) => {
    const theater = await theaterService.loadById(req.params.id)
    res.send(theater)
})

app.delete('/theater/:id', async (req, res) => {
    const theater = await theaterService.deleteTheater(req.params.id)
    res.send(theater)
})

// interaction between schemas

//add person to a movie
app.post('/movie/add-person', async (req, res) => {
    const movie = await movieService.addPerson(req.body.movieId, req.body.personId)
    res.send(movie)
})

//item shopped a person
app.post('/person/add-item', async (req, res) => {
    const person = await personService.addItem(req.body.personId, req.body.itemId)
    res.send(person)
})

//theater add movie
app.post('/theater/add-movie', async (req, res) => {
    const theater = await theaterService.addMovie(req.body.theaterId, req.body.movieId)
    res.send(theater)
})
/* Does not work

app.get('/movie/name/:name', async (req, res) => {
    const movie = await movieService.loadByName(req.params.id)
    res.send(movie)
})
*/


app.listen(3000, () => {
    console.log('Server listening')
})

//axios.post('/movie-Titans/people',{name:'Jim',age:33}).then(res=>console.log(res.data))
// axios.delete('/movie-Titans/people/3').then(res=>console.log(res))
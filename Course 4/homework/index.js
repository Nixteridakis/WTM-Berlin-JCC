const express = require('express')
const bodyParser = require('body-parser')

const movieService = require('./services/movie-services')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/movie-:id', async (req, res) => {
    const movie = await movieService.loadMovie(req.params.id)
    res.render('movie',{movie})
  })

app.get('/movie-:id/people', async (req, res) => {
    const movie = await movieService.loadMovie(req.params.id)
    res.render('people',{movie})
})

app.get('/movie-:id/people/:num', async (req, res) => {
    const person = await movieService.loadPerson(req.params.id, req.params.num)
    res.render('person',{person})
})

app.post('/movie-:id/people',async(req,res) => {
    const person = await movieService.addPerson(req.params.id,req.body)
    res.send(person)
})

app.delete('/movie-:id/people/:num',async(req,res) => {
    const user = await movieService.del(req.params.id, req.params.num)
    res.send(user)
})

app.listen(3000, () => {
    console.log('Server listening')
})

//axios.post('/movie-Titans/people',{name:'Jim',age:33}).then(res=>console.log(res.data))
// axios.delete('/movie-Titans/people/3').then(res=>console.log(res))
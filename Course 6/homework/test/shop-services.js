import test from 'ava'
import request from 'supertest'
import app from '../app'

test('See list of shop items', async t =>{
    const createChocolate = {name: 'Chocolate', price: 8}

    const creation = await request(app)
    .post('/item')
    .send(createChocolate)

    const res = await request(app).get('/shop')

    t.is(res.status, 200)
    t.true(Array.isArray(res.body),'Body is array')
    t.true(res.body.length > 0)
})


test('Create new Item', async t =>{
    const createChocolate = {name: 'Chocolate', price: 8}

    const res = await request(app)
    .post('/item')
    .send(createChocolate)

    t.is(res.status, 200)
    t.is(res.body.name, createChocolate.name)
    t.is(res.body.price, createChocolate.price)
})

test('Fetch a shop Item', async t =>{
    const createChocolate = {name: 'Chocolate', price: 8}

    const res = await request(app)
    .post('/item')
    .send(createChocolate)

    const fetchRes = await request(app).get(
        `/item/${res.body._id}`
        )

    const chocolateFetched = fetchRes.body

    t.is(fetchRes.status, 200)
    t.deepEqual(res.body,chocolateFetched)
})

test('Delete an Item', async t =>{
    const createChocolate = {name: 'Chocolate', price: 8}

    const createdChocolate = await request(app)
    .post('/item')
    .send(createChocolate)

    const deleteChocolate = await request(app)
    .delete(`/item/${createdChocolate.body._id}`)

    t.is(deleteChocolate.status, 200)

    const fetch = await request(app).get(`/item/${createdChocolate.body._id}/json`)

    t.is(fetch.status, 404);

})


//MOVIE SERVICES

test('See list of movies', async t =>{
    const createMovie = {
        name: 'Titans', 
        price: 8,
        attendees: []
    }

    const creation = await request(app)
    .post('/movie')
    .send(createMovie)

    const list = await request(app).get('/movies')

    t.is(list.status, 200)
    t.true(Array.isArray(list.body))
    t.true(list.body.length > 0)
})

test('Add a movie', async t => {
    const movieTitans = {
        name: 'Titans', 
        price: 8,
        attendees: []
    }

    const createTitans = await request(app).post('/movie').send(movieTitans)

    t.is(createTitans.status, 200)
    t.is(createTitans.body.name, movieTitans.name)    
    t.is(createTitans.body.price, movieTitans.price)
    t.deepEqual(createTitans.body.attendees, movieTitans.attendees)    
})

test('Fetch a movie', async t => {
    const movieTitans = {
        name: 'Titans', 
        price: 8,
        attendees: []
    }

    const createTitans = await request(app).post('/movie').send(movieTitans)
    const fetchTitans = await request(app).get(`/movie/${createTitans.body._id}`)

    t.is(fetchTitans.status, 200)
    t.is(fetchTitans.body.name, movieTitans.name)
    t.is(fetchTitans.body.price, movieTitans.price)
})

test('Delete a movie', async t => {
    const movieTitans = {
        name: 'Titans', 
        price: 8,
        attendees: []
    }

    const createTitans = await request(app).post('/movie').send(movieTitans)
    const deleteTitans = await request(app).delete(`/movie/${createTitans.body._id}`)

    t.is(deleteTitans.status, 200)
    
    const fetchTitans = await request(app).get(`/movie/${createTitans.body._id}/json`)

    t.is(fetchTitans.status, 404)
})

test('Add a person to the movie', async t => {
    const movieTitans = {
        name: 'Titans', 
        price: 8,
        attendees: []
    }

    const personJohn = {
        name: 'Johni',
        age: 33,
        shopped : []
    }

    const createTitans = await request(app).post('/movie').send(movieTitans)
    const createJohn = await request(app).post('/person').send(personJohn)
    const addPerson = await request(app).post(`/movie/${createTitans.body._id}/addPerson`).send({personId : createJohn.body._id})
    t.is(addPerson.status, 200)
    t.is(addPerson.body.attendees[0]._id, createJohn.body._id)
    t.deepEqual(addPerson.body.attendees[0], createJohn.body)
})

//PERSON SERVICES

test('See list of persons', async t =>{
    const newPerson = {
        name:'Cola', 
        age:33, 
        shopped:[]
    }

    const creation = await request(app)
    .post('/person')
    .send(newPerson)

    const people = await request(app).get('/people')

    t.is(people.status, 200)
    t.true(Array.isArray(people.body))
    t.true(people.body.length > 0)
})

test('Create a person', async t => {
    const newPerson = {
        name:'Cola', 
        age:33, 
        shopped:[]
    }

    const creation = await request(app)
    .post('/person')
    .send(newPerson)

    t.is(creation.status, 200)
    t.is(newPerson.name, creation.body.name)
    t.is(newPerson.age, creation.body.age)
    t.deepEqual(newPerson.shopped, creation.body.shopped)
})

test('Fetch a person', async t => {
    const newPerson = {
        name:'Cola', 
        age:33, 
        shopped:[]
    }

    const creation = await request(app)
    .post('/person')
    .send(newPerson)

    const fetchPerson = await request(app)
    .get(`/person/${creation.body._id}`)

    t.is(fetchPerson.status, 200)
    t.deepEqual(creation.body, fetchPerson.body)
})

test('Delete a person', async t => {
    const newPerson = {
        name:'Cola', 
        age:33, 
        shopped:[]
    }

    const creation = await request(app)
    .post('/person')
    .send(newPerson)

    const deletePerson = await request(app).delete(`/person/${creation.body._id}`)

    t.is(deletePerson.status, 200)

    const fetchPerson = await request(app).get(`/person/${creation.body._id}/json`)

    t.is(fetchPerson.status, 404)
})

test('Add item to the person', async t => {
    const newPerson = {
        name:'Kostas', 
        age:33, 
        shopped:[]
    }

    const newItem = {
        name: 'Chocolate',
        price: 3
    }

    const createPerson = await request(app)
    .post('/person')
    .send(newPerson)

    const createItem = await request(app)
    .post('/item')
    .send(newItem)

    const addItem = await request(app)
    .post(`/person/${createPerson.body._id}/add-item`)
    .send({itemId : createItem.body._id})

    t.is(addItem.status, 200 )
    t.is(addItem.body.shopped[0]._id, createItem.body._id)
    t.deepEqual(addItem.body.shopped[0], createItem.body)

})


//Theater Services
test('See list of theaters', async t =>{
    const newTheater = {
        name: 'Max', 
        totalSales: 130,
        movies: []
    }

    const creation = await request(app)
    .post('/theater')
    .send(newTheater)

    const theatersList = await request(app).get('/theaters')

    t.is(theatersList.status, 200)
    t.true(Array.isArray(theatersList.body))
    t.true(theatersList.body.length > 0)
})

test('Create a theater', async t => {
    const newTheater = {
        name: 'Max', 
        totalSales: 130,
        movies: []
    }

    const creation = await request(app)
    .post('/theater')
    .send(newTheater)

    t.is(creation.status, 200)
    t.is(newTheater.name, creation.body.name)
    t.is(newTheater.age, creation.body.age)
    t.deepEqual(newTheater.movies, creation.body.movies)
})

test('Fetch a theater', async t => {
    const newTheater = {
        name: 'Max', 
        totalSales: 130,
        movies: []
    }

    const creation = await request(app)
    .post('/theater')
    .send(newTheater)

    const fetchTheater = await request(app)
    .get(`/theater/${creation.body._id}`)


    t.is(fetchTheater.status, 200)
    t.deepEqual(creation.body, fetchTheater.body)
})

test('Delete a theater', async t => {
    const newTheater = {
        name: 'Max', 
        totalSales: 130,
        movies: []
    }

    const creation = await request(app)
    .post('/theater')
    .send(newTheater)

    const deleteTheater = await request(app)
    .delete(`/theater/${creation.body._id}`)

    const fetchTheater = await request(app)
    .get(`/theater/${creation.body._id}/json`)
    
    t.is(deleteTheater.status, 200)
    t.is(fetchTheater.status, 404)

})

test('Add a movie to a theater', async t => {
    const newTheater = {
        name: 'Max', 
        totalSales: 130,
        movies: []
    }
    
    const newTitans = {
        name: 'Titans', 
        price: 8,
        attendees: []
    }

    const createMovie = await request(app)
    .post('/movie')
    .send(newTitans)

    const createTheater = await request(app)
    .post('/theater')
    .send(newTheater)

    const addMovie = await request(app)
    .post(`/theater/${createTheater.body._id}/add-movie`)
    .send({movieId : createMovie.body._id})
    
    t.is(addMovie.status, 200)

})



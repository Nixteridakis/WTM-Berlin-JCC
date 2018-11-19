const fs = require('fs')

const PersonModel = require('../models/person')

const dbPath = `${__dirname}/../person-database.json`

async function findAll(){
    return PersonModel.find()
}

async function add(person){
    return PersonModel.create(person)
}

async function del(personId){
    return PersonModel.remove({ _id: personId })
}

async function find(personName){
    return PersonModel.find({ name : personName})
}

async function findByName(personName){
    return PersonModel.findByName({ name : personName})
}

/*


async function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const people = JSON.parse(file).map(PersonModel.create)

            resolve(people)
        })
    })
}

async function add(person) {
    const allPeople = await findAll()
    const lastPerson = allPeople[allPeople.length - 1]
    const lastPersonsId = lastPerson && lastPerson.id || 0
    person.id = lastPersonsId + 1

    person = PersonModel.create(person)
    allPeople.push(person)

    await saveAll(allPeople)

    return person
}

async function del(personId) {
    const allPeople = await findAll()
    const personIndex = allPeople.findIndex(p => p.id == personId)
    if (personIndex < 0) return

    allPeople.splice(personIndex, 1)

    saveAll(allPeople)
}

async function find(personId) {
    const allPeople = await findAll()

    return allPeople.find(p => p.id == personId)
}

async function saveAll(people) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(people), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
*/
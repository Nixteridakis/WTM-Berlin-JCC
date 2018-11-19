const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    age: Number,
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    }]
})

module.exports = mongoose.model('Person',PersonSchema)

module.exports = class Person {
    constructor(name, age, id) {
        this.name = name
        this.age = age
        this.id = id
    }

    attend(meetup) {
        meetup.attendees.push(this)
    }

    static create({ name, age, id }) {
        return new Person(name, age, id);
    }
}

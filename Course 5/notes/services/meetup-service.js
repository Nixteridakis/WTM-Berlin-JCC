const MeetupModel = require('../models/meetup')
const PersonModel = require('../models/person')

async function findAll() {
    return MeetupModel.find()
}

async function add(person) {
    return MeetupModel.create(person)
}

async function del(_id) {
    return MeetupModel.remove({ _id })
}

async function find(_id) {
    return MeetupModel.findOne({ _id })
    .populate('attendees')
}

async function addAttendee(meetupId, person){
    const meetup = await MeetupModel.findOne({ _id: meetupId})
    const person = await PersonModel.findOne({ _id: personiD})

    meetup.attendees.push(person)

    await meetup.save()
    return meetup
}

module.exports = {
    findAll,
    find,
    add,
    del,
    addAttendee
}

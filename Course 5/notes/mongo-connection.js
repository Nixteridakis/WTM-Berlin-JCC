const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test')
.then(()=>{
    console.log('connected yeeii')
})
.catch(err => {
    console.error(err)
})
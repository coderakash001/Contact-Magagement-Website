const mongoose = require('mongoose')

mongoose.connect('mongodb://0.0.0.0/mangement').then(()=>{
    console.log('connected to db')
})
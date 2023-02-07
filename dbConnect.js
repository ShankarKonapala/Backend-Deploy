const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Shankar:Shankar%4099@cluster0.468reo7.mongodb.net/Datacollection',{useNewUrlParser : true, useUnifiedTopology : true})

const connection = mongoose.connection 

connection.on('error', err => console.log(err))

connection.on('connected', () => console.log("MongoDB connetion is successful"));
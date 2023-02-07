const express = require('express')
const dbConnect = require('./dbConnect')
const app = express()
const port = 5000

app.use(express.json())
const userRoute = require('./routes/userRoute')

app.use('/api/users/',userRoute)

app.get('/', (req, res)=> res.send('Hello World'))
app.listen(port,() => console.log(`Node JS server is started at ${port}!`));
const express = require('express')
const app = express();
const port  =1147
const hotelRoute = require('./routes/hotelRoute')
cosnt 
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use('/api/hotel',hotelRoute)
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});
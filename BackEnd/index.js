const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const port = 4432;
app.use(cors());
app.use(express.json());
const hotelRoute = require('../routes/hotelRoute');
const employeeRoute = require('../routes/employeeRoute');
const roomTypeRoute = require('../routes/roomTypeRoute');
const roomRoute = require('../routes/roomRoute');
const bookingRoute = require('../routes/bookingRoute');
const guestRoute = require('../routes/guestRoute');
const userRoute = require('../routes/userRoute');

app.use('/api/hotel/',hotelRoute)
app.use('/api/employee/',employeeRoute)
app.use('/api/roomType/',roomTypeRoute)
app.use('/api/room/',roomRoute)
app.use('/api/booking/',bookingRoute)
app.use('/api/guest/',guestRoute)
app.use('/api/users/',userRoute)

// server configuration
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})
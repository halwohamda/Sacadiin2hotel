const { PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getAllBooking = async (req, res) => {
    const booking = await prisma.booking.findMany({});
    res.status(200).json({
        message: " successfully Getted All Booking",
        booking
    });
};

const createBooking = async (req, res) => {
    const { roomNumber, guest_id, totalPrice } = req.body;
    const newBooking = await prisma.booking.create({
        data: {
            roomNumber  ,
            guest_id    ,
            totalPrice  ,
        }
    })
    res.status(201).json({
        message: `Successfully created Booking`,
    })
}

// Update

const updateBooking = async (req, res) => {
    const { roomNumber, guest_id, totalPrice } = req.body;
    const { id } = req.params;
    const updatedBooking = await prisma.booking.update({
        where: { type_id: +id },
        data: {
            roomNumber  ,
             guest_id    ,
             totalPrice ,
        }
    })
    res.status(201).json({
        message: `Successfully Updated Booking`,
    })
}


// Filter 

const filterBooking = async (req, res) => {
    const { id } = req.params;
    const FilteredBooking = await prisma.booking.findUnique({
        where: { booking_id: +id },
    })
    res.status(200).json({
        message: `Successfully Filteted booking: ${id}`
    })
}

// Delete
const DeleteBooking = async (req, res) => {
    const { id } = req.params;
    const DeletedBooking = await prisma.booking.delete({
        where: { booking_id: +id },
    })
    res.status(200).json({
        message: `Successfully Deleted Booking: ${id}`
    })
}



module.exports = {
    getAllBooking,
    createBooking,
    updateBooking,
    filterBooking,
    DeleteBooking
};
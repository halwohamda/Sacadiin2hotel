const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllGuests = async (req, res) => {
    const Guests = await prisma.guest.findMany({});
    res.status(200).json({
        message: " successfully Getted All Guests",
        Guests
    });
};

const createGuests = async (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    const newGuest = await prisma.guest.create({
        data: {
            firstName ,
            lastName  ,
            phone     ,
            email     ,
        }
    })
    res.status(201).json({
        message: `Successfully created Guest`,
    })
}


// Update

const updateGuests = async (req, res) => {
    const { firstName, lastName, phone, email } = req.body;
    const { id } = req.params;
    const updatedGuest = await prisma.guest.update({
        where: { guest_id: +id },
        data: {
            firstName ,
            lastName  ,
            phone     ,
            email     ,
        }
    })
    res.status(201).json({
        message: `Successfully Updated roomType`,
    })
}


// Filter 

const filterGuests = async (req, res) => {
    const { id } = req.params;
    const FilteredGuest = await prisma.guest.findUnique({
        where: { guest_id: +id },
    })
    res.status(200).json({
        message: `Successfully Filteted guest: ${id}`
    })
}

// Delete
const DeleteGuests = async (req, res) => {
    const { id } = req.params;
    const DeletedGuests = await prisma.guest.delete({
        where: { guest_id: +id },
    })
    res.status(200).json({
        message: `Successfully Deleted Guest: ${id}`
    })
}



module.exports = {
    getAllGuests,
    createGuests,
    updateGuests,
    filterGuests,
    DeleteGuests
};
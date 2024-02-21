const { PrismaClient, Prisma } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllRoomTypes = async (req, res) => {
    const roomTypes = await prisma.roomType.findMany({});
    res.status(200).json({
        message: " successfully Getted All Room Types",
        roomTypes
    });
};

const createRoomType = async (req, res) => {
    const { name, Description, PricePerNight, capacity } = req.body;
    const newRoomType = await prisma.roomType.create({
        data: {
            name,
            Description,
            PricePerNight,
            capacity
        }
    })
    res.status(201).json({
        message: `Successfully created roomType`,
    })
}


// Update

const updateRoomType = async (req, res) => {
    const { name, Description, PricePerNight, capacity } = req.body;
    const {id} = req.params;
    const updatedRoomType = await prisma.roomType.update({
        where:{type_id: +id},
        data: {
            name,
            Description,
            PricePerNight,
            capacity
        }
    })
    res.status(201).json({
        message: `Successfully Updated roomType`,
    })
}


// Filter 

const filterRoomType = async (req, res) => {
    const {id} = req.params;
    const FilteredRoomType = await prisma.roomType.findUnique({
        where:{type_id: +id},
    })
    res.status(200).json({
        message: `Successfully Filteted roomType: ${id}`
    })
}

// Delete
const DeleteRoomType = async (req, res) => {
    const {id} = req.params;
    const DeletedRoomType = await prisma.roomType.delete({
        where:{type_id: +id},
    })
    res.status(200).json({
        message: `Successfully Deleted roomType: ${id}`
    })
}



module.exports = {
    getAllRoomTypes,
    createRoomType,
    updateRoomType,
    filterRoomType,
    DeleteRoomType
};
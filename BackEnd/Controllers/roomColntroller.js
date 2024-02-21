const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllRoom = async (req, res) => {
    const room = await prisma.rooms.findMany({});
    res.status(200).json({
        message: " successfully Getted All Room ",
        room
    });
};

const createRoom = async (req, res) => {
    const { hotel_id,type_id,booking_id,status } = req.body;
    const newRoom = await prisma.rooms.create({
        data: {
            hotel_id   ,
            type_id    ,
            booking_id ,
            status 
        }
    })
    res.status(201).json({
        message: `Successfully created room`,
    })
}


// // Update

// const updateRoomType = async (req, res) => {
//     const { name, Description, PricePerNight, capacity } = req.body;
//     const {id} = req.params;
//     const updatedRoomType = await prisma.roomType.update({
//         where:{type_id: +id},
//         data: {
//             name,
//             Description,
//             PricePerNight,
//             capacity
//         }
//     })
//     res.status(201).json({
//         message: `Successfully Updated roomType`,
//     })
// }


// // Filter 

// const filterRoomType = async (req, res) => {
//     const {id} = req.params;
//     const FilteredRoomType = await prisma.roomType.findUnique({
//         where:{type_id: +id},
//     })
//     res.status(200).json({
//         message: `Successfully Filteted roomType: ${id}`
//     })
// }

// // Delete
// const DeleteRoomType = async (req, res) => {
//     const {id} = req.params;
//     const DeletedRoomType = await prisma.roomType.delete({
//         where:{type_id: +id},
//     })
//     res.status(200).json({
//         message: `Successfully Deleted roomType: ${id}`
//     })
// }



module.exports = {
    getAllRoom,
    createRoom,
    // updateRoomType,
    // filterRoomType,
    // DeleteRoomType
};
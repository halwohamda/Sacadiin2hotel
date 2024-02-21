const {PrismaClient} = require('@prisma/client');
const prisma =  new PrismaClient();

// Get 
const getAll = async(req,res)=>{
    const getHotels = await prisma.hotel.findMany({});
     res.json({getHotels});
}

// Post
const createHotel = async(req,res)=>{
    const {name,address,phone,email} =req.body;
    if(!name || !address || !phone || !email){
        res.json({message: "Please enter a name or address or a phone number."});
    }else{
        const newHotel = await  prisma.hotel.create({
            data:{
                name,
                address,
                phone,
                email
            }
        });
        res.json({
            message: "Successfully created Hotel."
        })
    }
    
}

// Deleting Hotel

const deletingHotel = async(req,res)=>{
    const {id} = req.params;
    const deleted = await prisma.hotel.delete({
        where:{hotel_id:+id}
    })
    res.json({message: `Success deleting hotel: ${id}`})
}

// Updating Hotel
const updatingHotel = async(req,res)=>{
    const {name,address,phone,email} = req.body;
    const {id} = req.params 
    const updated = await prisma.hotel.update({
        data:{
            name,
            address,
            phone,
            email
        },
        where:{hotel_id:+id}
    });
    res.json({message: `Successfully updated Hotel: ${id}`})

}

// Filtering Hotels

const filteringHotels = async(req,res)=>{
    const {id} = req.params;
    const filter  = await prisma.hotel.findUnique({
        where:{hotel_id:+id}
    })
    res.json({
        message: "Successfully Filtered a Hotel",
        filter
    })
}


module.exports = {
    getAll,
    createHotel,
    deletingHotel,
    updatingHotel,
    filteringHotels
}


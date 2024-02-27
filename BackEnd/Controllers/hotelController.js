const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

const getAll = async(req,res)=>{
    const hotels = await prisma.hotel.findMany({})
    res.json(hotels)
}


const postHotel = async(req,res)=>{
    const {hotelname,address,email,phone} = req.body;
    if(!hotelname || !address || !email || !phone){
        res.json({
            status: 'Fadlan Lama ogola isago madhan'
        })
    }else{
        const newHotel = await prisma.hotel.create({
            data:{  
                hotelname,
                address,
                email,
                phone
            }
        })
        res.json({
            newHotel
        })
    }   
}
module.exports ={
    getAll,
    postHotel
}
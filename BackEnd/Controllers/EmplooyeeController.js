const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllEmplooyee = async (req, res) => {
    const emplooyee = await prisma.emplooyee.findMany({})
    res.status(200).json(
        {
            message: "Successfully Getted all Emplooyee",
            emplooyee
        });
}

// Create new Emplooyee
const createNewEmplooyee = async(req,res)=>{
    const {firstname,middlename,lastname,position,salary,phone,email,hotel_id}  =req.body;
    if(!firstname || !middlename || !lastname || !position ||!salary || !phone || !email || !hotel_id){
        res.status(400).json({
            message: message.error
        })
    }else{
        const newEmplooyee = await prisma.emplooyee.create({
            data:{
                firstname,
                middlename,
                lastname,
                position,
                salary,
                phone,
                email,
                hotel_id
            }
        })  
        res.status(201).json({
            message: "successifully created a new Employee",
            newEmplooyee
        })  
    }
   
} 

// UpdateEmployee
const updateEmplooyee=async(req,res)=>{
    const {id} = req.params;
    const {firstname,middlename,lastname,position,salary,phone,email}= req.body;
    const updatedEmplooye = await prisma.emplooyee.update({
        where:{emplooyee_id:+id},
        data:{
            firstname,
            middlename,
            lastname,
            position,
            salary,
            phone,
            email,
        }
    })
    res.status(200).json({
        message: `Success Updated emplooyee: ${id}`
    })
}   

// Filtering
const filteringEmplooyee = async(req,res)=>{
    const {id} = req.params; 
    const filteredEmplooyee = await prisma.emplooyee.findUnique({
        where:{emplooyee_id:+id}
    });
    res.status(200).json({
        message: `Successfully Filtered Emplooyee: ${id}`,
        // filteredEmplooyee
    });
};

// Delete
const deleteEmplooyee = async(req,res)=>{
    const {id} = req.params;
    const deletedEmplooyee = await prisma.emplooyee.delete({
        where:{emplooyee_id:+id}
    });
    res.status(200).json({
        message: `Successfully deleted Emplooyee: ${id}`
    });
 }

module.exports = {
getAllEmplooyee,
createNewEmplooyee,
updateEmplooyee,
filteringEmplooyee,
deleteEmplooyee
};

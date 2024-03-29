const {PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (res,req)=>{
    const Employee = await prisma.emplooyee.findMany({})
    res.json(Employee);
}

const PostEmployee = async (res,req)=>{
    const { firstname,middlename, lastname,position,salary,phone ,email,HireDate}= req.body;
    if(!firstname,!middlename,!lastname, !position,!salary,!phone,!email,!HireDate){
        req.json({
            status: 'fadlan xog gali'
        })
    }else{
        const newEmployee = await prisma.emplooyee.create({
            data:{
                firstname,
                middlename,
                lastname, 
                position,
                salary,
                phone,
                email,
                HireDate
            }

        })
        res.json({
            newEmployee
        })
    }
}
module.exports = {
    getAll,
    PostEmployee
}
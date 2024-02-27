const {PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

const getAll = async (res,req)=>{
    const Employee = await prisma.emplooyee.findMany({})
    res.json(Employee);
}

const PostEmployee = async (res,req)=>{
    const {}
}
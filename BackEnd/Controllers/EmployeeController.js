const {PrismaClient } = require ('@prisma/client');
const prisma = new PrismaClient();

const get = async (res,req)=>{
    const Employee = await prisma.emplooyee.findMany({})
    res.
}
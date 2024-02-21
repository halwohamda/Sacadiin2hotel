const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const bcryptjs = require('bcryptjs')
const salt = bcryptjs.genSaltSync(10)
const jwt = require('jsonwebtoken')

const tokenGenerator = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
      expiresIn: "5m",
    });
  };
  
  // Register new User
  const registerUser = async (req, res) => {
    const { email, password } = req.body;
    const checkUser = await prisma.users.findFirst({
      where: { email },
    });
    if (checkUser) {
      res.status(400).json({
        status: "Error",
        message: "Fadlan Ciwaankani wuu Diiwan Gashan yahay Markale isku day.",
      });
      return;
    }
    if (!email || !password) {
      res.json({
        status: "Error",
        message: "email or password was not provided",
      });
      return;
    }
  
    //HasedPassword
    const hashedPassword = await bcryptjs.hashSync(password,salt);
    const newUser = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
      },
      select: {
        email: true,
        password: true,
      },
    });
    const token = tokenGenerator(newUser.userid);
    res.json({
      users: { ...newUser },
      token,
      status: "success",
    });
  };
  
  // Get All Users
  const getAllUser = async (req, res) => {
    try {
      const user = await prisma.users.findMany();
      res.status(200).json({
        user,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error while getting users",
      });
    }
  };
  
  // login
  const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.json({
        message: "Please enter your email address and password",
      });
      return;
    }
    const userExisting = await prisma.users.findFirst({
      where: {
        email, 
      },
      select: {
        userid: true,
        email: true,
        password: true,
        role: true,
      },
    });
    if(!userExisting){
      res.json({
          message: "wrong credentials"
      })
      return
    }
    const dehashedPassword = await bcryptjs.compareSync(password, userExisting.password);
    if(dehashedPassword){
   const token = tokenGenerator(userExisting.userid);
   res.status(201).json({
      status: "success",
      message : `Your are Now Logged.`,
      token,
      users:userExisting
   }) 
    }else{
      res.status(400).json({
          status: 'error',
          message : `you are not logged`
      })
    }
  };
  
  // get user
  const getUser = async (req, res) => {
      try {
        const { id } = req.params;
        const user = await prisma.users.findFirst({
          where: {
            userid: Number(id),
          },
          select: {
            userid: true,
            email: true,
          },
        });
        res.json({
          user,
        });
      } catch (error) {
          res.status(404).json({
              message: 'Invalid request error',
          })
        res.json({
          error,
        });
      }
    };

    // Update Role User

    const updateRoleUser = async(req,res)=>{
      const{id} = req.params;
      const{role} = req.body;
      const user = await prisma.users.findUnique({
        where:{userid:+id}
      })
      if(user){
        const updateRole = await prisma.users.update({
          where:{userid:+id},
          data:{role:role}
        })
        if(updateRole){
          return res.status(200).json({
            message: `updated role user ${id}`,
            updateRole
          })
        }
        return res.status(404).json({
          message: "Role user not found"
        })
      }
    }


    // Delete User
    const deleteUser = async(req,res)=>{
      const {id} = req.params;
      const user = await prisma.users.delete({
        where:{userid:+id}
      })
      try {
        res.status(200).json({
          message: `success Deleted user ${id}`
        })
      } catch (error) {
        res.status(404).json({
          message: `error Deleted user ${id}`
        })
      }
    }

    // Find byUserId
    const findByUserId = async(req,res)=>{
          const {id} = req.params;
          // const {email} = req.body;
          const user = await prisma.users.findFirst({
            where:{userid:+id}
          })
          if(!user){
            res.status(404).json({
              message: `Sorry we don't have a user`
            })
          }else{

            try {
              res.status(200).json({
                message: `success founded user ${id}`,
                user
              })
            } catch (error) {
                res.status(404).json({
                  message: `error finding user ${id}`,
                })            
            }
          }
    }
  
  module.exports = {
    registerUser,
    getAllUser,
    login,
    getUser,
    updateRoleUser,
    deleteUser,
    findByUserId
  };
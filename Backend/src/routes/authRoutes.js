import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../prismaClient.js";
import isEmail from "validator/lib/isEmail.js";
import validator from "validator";

const { isMobilePhone } = validator;
const router = express.Router();

dotenv.config();

//Seller signup
router.post("/signup/seller", async (req, res) => {

  try {  

    //getDetails
    const { 
           fullName,
           phone, 
           email,
           password,
           permAddress,
           profilePicture,
           sellerRole } = req.body;

    let orgAddress = null
    let orgName = null

    if(sellerRole === "ORGANISATION") { 
      orgName = req.body.orgName
      orgAddress = req.body.orgAddress
    }

    //checking the fields
    if(!fullName || !phone || !email || !password || !permAddress || !sellerRole || !profilePicture ) { return res.status(400).json({message : "All fields are required "}) }
    if(sellerRole === "ORGANISATION" && (!orgName || !orgAddress)) { return res.status(400).json({message : "All fields are required"}) }
    if(!isEmail(email) || !isMobilePhone(phone)) { return res.status(400).json({message :"Enter valid credintials"})}
    if(password.length < 6) { return res.status(400).json({message : "Password should be atleast 6 characters long"})}

    //hashing password
    const hashedPassword = bcrypt.hashSync(password, 8);

    try {

      const user = await prisma.user.create({
        data : {
          fullName,
          phone,
          email,
          passwordHash : hashedPassword,
          permAddress,
          profilePicture,
          sellerRole,
          orgName,
          orgAddress
        }
      })

      const token = jwt.sign({id : user.userId},process.env.JWT_SECRET, {expiresIn: '8h'});
      console.log("User successfully created");

      res.json({token});

    } catch(error) {throw new Error(error)}

  } catch(error) { res.json({messsage : `${error.messsage}`})
  }
})

router.post("/login/seller", async (req, res) => {

})

export default router

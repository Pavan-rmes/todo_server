import {client} from "../index.js"
import express from "express"
import {getUserDetails} from "./helper.js"

const userRoute = express.Router()

userRoute.post("/",async (req, res) => {
  const {email,password} = req.body;
  const userDataDB = await getUserDetails(email)
  if(!userDataDB){
    console.log("hello")
    res.send({message:"Invalid credentials"})
    return;
  }
  if(userDataDB.password === "guvi"){
    res.send({message:"success"})
  }
  else{
    res.send({message:"Invalid credentials"})
    return;
  }

});

export {userRoute}



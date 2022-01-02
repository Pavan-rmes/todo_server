import express from "express"
import { MongoClient } from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const app = express()

// const Mongodb ="mongodb+srv://pavan98:Pavan98@cluster0.wwnwy.mongodb.net"
const Mongodb = process.env.Mongodb
const PORT = process.env.PORT

app.listen(PORT)

async function databaseConnection(){
    const client = new MongoClient(Mongodb)
    await client.connect()
    console.log("DB cnnected")
    return client
}


const client = await databaseConnection()

const date = new Date()
console.log(date.toLocaleString())

const todoData = [{
    id:"1",
    task:"Task1",
    date:"1/1/2022, 5:07:36 PM"
},{
    id:"2",
    task:"Task2",
    date:"1/1/2022, 6:07:36 PM"
},{
    id:"3",
    task:"Task3",
    date:"1/1/2022, 7:07:36 PM"
}]


// app.get("/login",async(req,res)=>{
//     const data = await client.db("todo").collection("login").find({}).toArray()
//     res.send(data)
// })

const loginSucess = {status:"success"}
const loginFailure = {status:"failed"}

app.post("/login",express.json(),async (req,res)=>{
    const gotLoginDeatils =req.body
    const loginData = await client.db("todo").collection("login").find({}).toArray()
    const verifyLogin = loginData.filter((item)=>((item.email === gotLoginDeatils.email)&&item.password === gotLoginDeatils.password))[0]
    if(verifyLogin){
        res.send(loginSucess)
    }
    else{
        res.send(loginFailure)
    }
})


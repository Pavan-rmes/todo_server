import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import cors from "cors"
import {userRoute} from "./routes/login.js"

dotenv.config();
const app = express();


// const Mongodb ="mongodb+srv://pavan98:Pavan98@cluster0.wwnwy.mongodb.net"
const Mongodb = process.env.MONGO_DB
const PORT = process.env.PORT


// const Mongodb = "mongodb://localhost:27017";
// const PORT = 9000;

app.listen(PORT,()=>console.log(`Server Running on ${PORT} `));

async function databaseConnection() {
  const client = new MongoClient(Mongodb);
  await client.connect();
  console.log("DB cnnected");
  return client;
}

const client = await databaseConnection();


const todoData = [
  {
    id: "1",
    task: "Task1",
    date: "4/1/2022, 5:07:36 PM",
  },
  {
    id: "2",
    task: "Task2",
    date: "3/1/2022, 6:07:36 PM",
  },
  {
    id: "3",
    task: "Task3",
    date: "1/1/2022, 7:07:36 PM",
  },
];

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
  res.send("hello from todo app")
})

app.use("/login",userRoute)

export {client}



// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "pavanguntupally12@gmail.com",
//     pass: "pk12345678",
//   },
// });

// const mailOptions = {
//   from: "The Idea project",
//   to: "pavanguntupally12@gmail.com",
//   subject: "My first Email!!!",
//   text: "This is my first email. I am so excited!",
// };

// transporter.sendMail(mailOptions,(err,sent)=>{
//     console.log(err)
// })

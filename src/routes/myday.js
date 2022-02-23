import express from "express"
const tasksRoute = express.Router()
import {getDayTasks,addNewTask,changeStatus,changeImp} from "./helper.js"


tasksRoute.get("/", async (req, res) => {
  const responseOfMyday = await getDayTasks();
  res.send(responseOfMyday);
});

tasksRoute.post("/",async(req,res)=>{
  const task = req.body
  console.log(task)
  const response = await addNewTask(task)
  console.log(response)
  res.send(response)
})


tasksRoute.post("/changestatus",async(req,res)=>{
  const response = await changeStatus(req.body)
  res.send(response)
})

tasksRoute.post("/changeimp",async(req,res)=>{
  const response = await changeImp(req.body)
  res.send(response)
})

export {tasksRoute}
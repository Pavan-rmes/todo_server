import express from "express"
const tasksRoute = express.Router()
import {getDayTasks,addNewTask} from "./helper.js"


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


export {tasksRoute}
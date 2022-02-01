import express from "express"
const tasksRoute = express.Router()
import {getDayTasks,addNewTask} from "./helper.js"


tasksRoute.get("/myday", async (req, res) => {
  const responseOfMyday = await getDayTasks();
  res.send(responseOfMyday);
});

tasksRoute.post("/myday",async(req,res)=>{
  const task = req.body
  const response = await addNewTask(task)
  res.send(response)
})

export {tasksRoute}
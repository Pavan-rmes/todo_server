import { client } from "../index.js";
import {ObjectId} from "mongodb"

async function getUserDetails(email){
    const loginData = await client.db("todo").collection("login").findOne({email:email})
    return loginData;
}


async function getDayTasks(){
    const data = await client.db("todo").collection("tasks").find({}).toArray();
    return data;
}

async function addNewTask(task){
    const data = await client.db("todo").collection("tasks").insertOne(task);
    return data;
}


async function changeStatus(task){
    const {id,status} = task
    const data = await client.db("todo").collection("tasks").updateOne({_id:ObjectId(id)},{$set:{status:status}})
    return data
}

async function changeImp(task){
    const {id,imp} = task
    const data = await client.db("todo").collection("tasks").updateOne({_id:ObjectId(id)},{$set:{imp:imp}})
    return data
}

export {getUserDetails,getDayTasks,addNewTask,changeStatus,changeImp}
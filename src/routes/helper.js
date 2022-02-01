import { client } from "../index.js";

async function getUserDetails(email){
    const loginData = await client.db("todo").collection("login").findOne({email:email})
    return loginData;
}


async function getDayTasks(){
    const data = await client.db("todo").collection("tasks").find({}).sort({ id: 1 }).limit(10).toArray();
    return data;
}

async function addNewTask(task){
    const data = await client.db("todo").collection("tasks").insertOne(task);
    return data;
}

export {getUserDetails,getDayTasks,addNewTask}
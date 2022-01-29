import { client } from "../index.js";

async function getUserDetails(email){
    const loginData = await client.db("todo").collection("login").findOne({email:email})
    return loginData
}

export {getUserDetails}
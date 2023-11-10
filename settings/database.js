import {connect} from "mongoose"
import { env } from "./envs.js";
export {startConnection}


const startConnection = async () => {
    try {
        const db = await connect(env.MONGO_URI)
        console.log(`Estamos conectados a: ${db.connection.name}`);
    } catch (error) {
        console.error(error);
        
    }
} 
import {Sequelize} from "sequelize";
import { env } from "./envs.js";

const {DB} = env;



const sequelize = new Sequelize(DB.NAME, DB.URSER, DB.PASSWORD, {
    host: DB.HOST,
    port: DB.PORT,
    dialect: "mysql",
  });

 const startConnection = async ()  => {
    await sequelize.sync({force: false})
    console.log("probando sequelize");    

}

export{sequelize, startConnection}
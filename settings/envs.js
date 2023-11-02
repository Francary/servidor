import { config } from "dotenv";
export {env}

config();

const puerto = 3000;

const env = {

    PORT: process.env.PORT || puerto

};



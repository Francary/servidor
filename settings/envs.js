import { config } from "dotenv";
export {env}

config();

const puerto = 4000;

const env = {

    PORT: process.env.PORT || puerto,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
};



import { config } from "dotenv";
export {env}

config();

const puerto = 4000;

const env = {

    PORT: process.env.PORT || puerto,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    DB: {
        HOST: process.env.DB_HOST,
        PORT: process.env.DB_PORT,
        URSER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,
        NAME: process.env.DB_NAME,
    }
};



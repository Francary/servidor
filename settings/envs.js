import { config } from "dotenv";
export {env}

config();

const puerto = 4000;

const env = {

    PORT: process.env.PORT || puerto,
    MAIL_PASSWORD: process.env.MAIL_PASSWORD,
};



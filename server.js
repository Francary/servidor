// Librerias
import express from "express";
import  morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import fileUpload from "express-fileupload";
import {startConnection} from "./settings/database.js"


//
import { postRouter } from "./routes/post.routes.js"
import { env } from "./settings/envs.js"
import { authenticationMiddleware } from "./middleware/authentication.middleware.js"
import { userRouter } from "./routes/user.routes.js"
import { authorizationMiddleware } from "./middleware/authorization.middleware.js"
import { ctrlUpload } from "./controllers/upload.controller.js"

import path from "node:path"
import * as url from "url"
import fs from "node:fs/promises"
import { ctrlEmail } from "./controllers/email.controller.js";

// const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const servidor = express()

// middleware

    // Comunes
servidor.use(morgan("dev"))
servidor.use(cors())
servidor.use(helmet())
servidor.use(express.static("public"))
servidor.use(fileUpload({
    useTempFiles:true,
    tempFileDir: "./temp/"
}))

    // Para que ande Body
servidor.use(express.json())

    // Para que ande formulario
servidor.use(express.urlencoded({extended: false}))
    
    // Validacion personalizada 
// servidor.use(validarPost)

servidor.use("/posts",
//  authenticationMiddleware,
//   authorizationMiddleware,
   postRouter)
servidor.use("/users", userRouter)
servidor.post("/upload", ctrlUpload)

servidor.post("/send-email", ctrlEmail)

servidor.get('/', (req , res) => {
    res.sendFile('index.html')                      
})

servidor.listen(env.PORT, async() => {
    await startConnection()
    console.log(`Servidor Clase 04 activo por puerto ${env.PORT}`);
})

// Librerias
import express from "express";
import  morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import fileUpload from "express-fileupload";
import { createTransport } from "nodemailer";

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

servidor.use("/posts", authenticationMiddleware, authorizationMiddleware, postRouter)
servidor.use("/users", userRouter)
servidor.post("/upload", ctrlUpload)


const transporter = createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: "francary.programmer@gmail.com",
      pass: env.MAIL_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false // Esta línea deshabilita la validación del certificado que me da el error. Otra opcion es desactivar el antivirus AVAST
      }
  });

servidor.post("/send-email", async (req,res) => {

    try {
        const { destinatario , asunto , mensaje} = req.body;
        const response = await transporter.sendMail({
            from: "francary.programmer@gmail.com",
            to: destinatario,
            subject: asunto,
            text: mensaje,
        });
        console.log(response)
        res.send("E-mail enviado")
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
        
    }


})

servidor.get('/', (req , res) => {
    res.sendFile('index.html')                      
})

servidor.listen(env.PORT, () => {
    console.log(`Servidor Clase 04 activo por puerto ${env.PORT}`);
})

import express from "express"
import  morgan from "morgan"
import helmet from "helmet"
import cors from "cors"
import { postRouter } from "./routes/post.routes.js"
import { env } from "./settings/envs.js"


const servidor = express()

// middleware

    // Comunes
servidor.use(morgan("dev"))
servidor.use(cors())
servidor.use(helmet())
servidor.use(express.static("public"))

    // Para que ande Body
servidor.use(express.json())

    // Para que ande formulario
servidor.use(express.urlencoded({extended: false}))
    
    // Validacion personalizada 
// servidor.use(validarPost)

servidor.use("/posts",postRouter)

servidor.get('/', (req , res) => {
    res.sendFile('index.html')                   
})

servidor.listen(env.PORT, () => {
    console.log(`Servidor Clase 04 activo por puerto ${env.PORT}`);
})

import { Router } from "express";
import {ctrlDeleteUserById, ctrlGetAllUsers, ctrlGetUserById, ctrlLogin ,ctrlRegister} from "../controllers/user.controller.js"
import { validarRegister } from "../validations/validations.registrer.js";
import { verificarValidaciones } from "../middleware/verificar.validaciones.js";



const userRouter = Router()

userRouter.get("/" , ctrlGetAllUsers) //Listo

userRouter.get("/:userId" , ctrlGetUserById) //Listo

userRouter.post("/register" ,validarRegister,verificarValidaciones, ctrlRegister) //Listo

userRouter.post("/login", ctrlLogin) //Listo

userRouter.delete("/:userId", ctrlDeleteUserById) //Listo




export { userRouter};

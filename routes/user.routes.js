import { Router } from "express";
import {ctrlDeleteUserById, ctrlGetAllUsers, ctrlGetUserById, ctrlLogin ,ctrlRegister} from "../controllers/user.controller.js"



const userRouter = Router()

userRouter.get("/" , ctrlGetAllUsers) //Listo

userRouter.get("/:userId" , ctrlGetUserById) //Listo

userRouter.post("/register" , ctrlRegister) //Listo

userRouter.post("/login", ctrlLogin) //Listo

userRouter.delete("/:userId", ctrlDeleteUserById) //Listo




export { userRouter};

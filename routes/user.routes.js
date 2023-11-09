import { Router } from "express";
import {ctrlDeleteUsers, ctrlGetAllUsers, ctrlLogin ,ctrlRegister} from "../controllers/user.controller.js"


const userRouter = Router()

userRouter.get("/" , ctrlGetAllUsers)

userRouter.post("/register" , ctrlRegister)

userRouter.post("/login", ctrlLogin)

userRouter.delete("/", ctrlDeleteUsers)



export { userRouter};

import jwt from "jsonwebtoken"
import {getUserById } from "../models/user.model.js"
export {guardMiddleware}

const guardMiddleware = (req , res, next) =>{

    console.log("Paso por Guard Middleware");
  try {
    
    const { authorization } = req.headers;
    if(!authorization) res.sendStatus(401);
    const token  = authorization
    const { id } = jwt.verify( token , "miPalabraSecreta")
    const user = getUserById(id)
    
    req.user = user;
    
    next()
  } catch (error) {
    return res.sendStatus(401)
  }

}
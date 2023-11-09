import jwt from "jsonwebtoken"
import {userModel } from "../models/user.model.js"
export {authenticationMiddleware}

const authenticationMiddleware = (req , res, next) =>{

    console.log("Paso por Guard Middleware");
  try {
    
    const { authorization } = req.headers;
    if(!authorization) res.sendStatus(401);
    const token  = authorization
    const { id } = jwt.verify( token , "miPalabraSecreta")
    const user = userModel(id)
    
    req.user = user;
    
    next()
  } catch (error) {
    return res.sendStatus(401)
  }

}
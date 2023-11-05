import { createNewUser, getAllUsers, getUserByEmail,getUserById ,listOfUsers} from "../models/user.model.js"
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
export {ctrlGetAllUsers,ctrlLogin,ctrlRegister}

const ctrlRegister = async (req, res) => {
  
    const newUser = await createNewUser(req.body );
    if(!newUser) return res.sendStatus(400);

    const token = jwt.sign({id: newUser.id},"miPalabraSecreta")
    res.status(201).json({token});
    
}

const ctrlLogin = async (req, res)=>{
    
    const {email , password} = req.body
    const user = getUserByEmail(email);

    if (!user) return res.sendStatus(404);

    const isMatch = await bcrypt.compare( password , user.password)

    if (!isMatch) return res.sendStatus(404);

    // if(user.password !== password) return res.sendStatus(401) esto era antes de usa la libreria bcrypt
    
    const token = jwt.sign({id: user.id},"miPalabraSecreta")
    
    res.status(201).json({token});
}

const ctrlGetAllUsers = ( req, res, next) => {
    const users = getAllUsers()
    try {
            if(listOfUsers.length < 1){
            return res.sendStatus(204)
        }
            res.status(200).json(users)
    } catch (error) {
        next("Tenemos Problemas")
    }
}
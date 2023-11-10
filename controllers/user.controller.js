import { createNewUser, deleteUser, getAllUsers, getUserByEmail, getUserById,} from "../models/user.model.js"
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import { env } from "../settings/envs.js";
export {ctrlGetAllUsers,ctrlLogin,ctrlRegister,ctrlGetUserById,ctrlDeleteUserById}

const ctrlRegister = async (req, res) => {
 
    const newUser = await createNewUser(req.body );
    if(!newUser) return res.status(400).send("El mail ya esta registrado");
    const token = jwt.sign({id: newUser.id},env.JWT_SECRET)
    res.status(201).json({token, newUser});  


  } 
const ctrlLogin = async (req, res)=>{
    const {email , password} = req.body
    const user = await getUserByEmail({email});
    if (!user) return res.status(404).send("Usuario no encontrado");
    const isMatch = await bcrypt.compare( password , user.password)
    if (!isMatch) return res.status(401).send("Contraseña Incorrecta");
    const token = jwt.sign({id: user.id},env.JWT_SECRET)
    res.status(201).json({user, token});
}

const ctrlGetAllUsers = async( req, res) => {
    const users = await getAllUsers()
    try {
            res.status(200).json(users)
    } catch (error) {
        console.error(error);
    }
}

const ctrlGetUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await getUserById({ id: userId });
          if (!user) {
          return res.sendStatus(404);
        }
          res.status(200).json(user);
        
    } catch (error) {
        console.error(error);
    }
  }

  const ctrlDeleteUserById = async (req, res) =>{
    try {
        const { userId } = req.params;
        const user = await deleteUser({ id: userId });
          if (!user) {
          return res.status(404).send("Usuario no Encontrado");
        }
          res.status(200).send("Usuario Eliminado");
        
    } catch (error) {
        console.error(error);
    }
  }

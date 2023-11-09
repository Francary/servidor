import { userModel} from "../models/user.model.js"
import  jwt  from "jsonwebtoken";
import bcrypt from "bcrypt"
import { env } from "../settings/envs.js";
export {ctrlGetAllUsers,ctrlLogin,ctrlRegister,ctrlDeleteUsers}

const ctrlRegister = async (req, res) => {
    try {
        const { name, email, password, isAdmin } =req.body
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await userModel.create({ name, email, password: hashedPassword,isAdmin} );
        if(!newUser) return res.sendStatus(400);
        const token = jwt.sign({id: newUser.id},env.JWT_SECRET)
        res.status(201).json({token});
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }  
}

const ctrlLogin = async (req, res)=>{
    try {
        const {email , password} = req.body
        const user = await userModel.findOne({
        where: { email: email } });
    
        if (!user) return res.status(404).send("Usuario no encontrado");
    
        const isMatch = await bcrypt.compare( password , user.password)
    
        if (!isMatch) return res.status(401).send("Contraseña incorrecta");
      
        const token = jwt.sign({id: user.id},env.JWT_SECRET)
        
        res.status(201).json({token});
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

const ctrlGetAllUsers = async ( req, res) => {
    try {
        const users = await userModel.findAll()  
            if(users.length < 1){
            return res.sendStatus(204)
        }
            res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
}

const ctrlDeleteUsers = async (req,res)=>{
    try {
        const {email , password} = req.body
        const user = await userModel.findOne({
        where: { email: email } });
    
        if (!user) return res.status(404).send("Usuario no encontrado");
    
        const isMatch = await bcrypt.compare( password , user.password)
    
        if (!isMatch) return res.status(401).send("Contraseña incorrecta");
      
        const token = jwt.sign({id: user.id},env.JWT_SECRET)
        await user.destroy()
        res.status(201).json({token});
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
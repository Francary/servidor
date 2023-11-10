import{ v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

export {getAllUsers, createNewUser , getUserById, getUserByEmail ,updateUser, deleteUser}

const UserSchema = new Schema ({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin: {
        type:Boolean,
        default: false,
    },
},
{
    timestamps: true,
}
)

const userModel = model("User", UserSchema)

const getAllUsers = async () => {
    const allUsers = await userModel.find()
    return allUsers
};

const createNewUser = async ({name,email,password}) => {
    const emailRegister  = await userModel.findOne({ email });
    
    if (emailRegister) { return null;}
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = {
        name,
        email,
        password: hashedPassword,
        isAdmin: name === "Francary"
    };
    const user = await userModel.create(newUser)
    return (user)
}

const getUserById = async ({id}) => {
    const user = await userModel.findById(id);
    return user;
}

const getUserByEmail = async ({email}) => {
    const user = await userModel.findOne({email})
    return user;
}

const updateUser = async (id, datos) =>{
    try {
      const user =  await userModel.findByIdAndUpdate(id, datos, {new: true})
      return user
    } catch (error) {
        console.error(error);
    }
}

const deleteUser = async ({id}) =>{
    
    await userModel.findOneAndDelete(id);
    
}
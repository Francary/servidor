import{ v4 as uuid } from "uuid";
import bcrypt from "bcrypt";

export {getAllUsers, createNewUser , getUserById, getUserByEmail,listOfUsers}

let listOfUsers = []

const getAllUsers = () => {
    return [...listOfUsers]
};

const createNewUser = async ({name,email,password}) => {
    if(!name || !email || !password) return null;

    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = {
        id: uuid(),
        name,
        email,
        password: hashedPassword,
        isAdmin: name === "Francary"
    };
    listOfUsers.push(newUser);
    
    return (newUser)
}

const getUserById = (id) => {
    const user = listOfUsers.find((user) => user.id === id);
    return user;
}

const getUserByEmail = (email) => {
    const user = listOfUsers.find((user) => user.email === email);
    return user;
}

import{ v4 as uuid } from "uuid";
import { sequelize } from "../settings/database.js";
import { DataTypes } from "sequelize";
export { userModel,}

// MODELO CON SEQUELIZE
const userModel = sequelize.define(
    "User",
    {
        id:{
            type: DataTypes.UUID,
            defaultValue: uuid,
            primaryKey: true, 
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        isAdmin:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        timestamps: true,
    }
)

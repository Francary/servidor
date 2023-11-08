import{ v4 as uuid } from "uuid"
import { sequelize } from "../settings/database.js"
import { DataTypes } from "sequelize"
export { postModel,}


// MODELO CON SEQUELIZE

const postModel = sequelize.define(
    "Post",
    {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuid,
        primaryKey: true,

    },
    title: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    contenido: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type:DataTypes.STRING,
        allowNull: false,
    },
},
{
    timestamps: true,
}
)


import {param} from "express-validator"
export {validarPostsById}

const validarPostsById = [
param("postId").isNumeric().withMessage("El ID debe ser un numero").toInt()
];

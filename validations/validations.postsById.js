import {param} from "express-validator"
export {validarPostsById}

const validarPostsById = [
param("postId").isString().withMessage("El ID debe ser valido")
];

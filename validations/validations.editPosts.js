import {body, param} from "express-validator"
export {validarEditPosts}

const validarEditPosts = [
param("postId").
isNumeric().withMessage("La id debe ser un numero").toInt(),    
body("title").
    optional().
    isString().withMessage("El titulo debe ser un string").
    isLength({min: 8 }).withMessage("El Titulo debe ser minimo 8 caracteres"),

body("contenido").
    optional().
    isString().withMessage("El Contenido es obligatorio"),

body("image").
    optional().
    isString().withMessage("La Imagen es obligatorio").
    isURL().withMessage("La URL de la imagen no es valida")
]
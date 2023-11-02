import {body} from "express-validator"
export {validarCreatPosts}

const validarCreatPosts = [
body("title").
    notEmpty().withMessage("El Titulo es obligatorio").
    isString().withMessage("El titulo debe ser un string").
    isLength({min: 8 }).withMessage("El Titulo debe ser minimo 8 caracteres"),

body("contenido").
    notEmpty().withMessage("El Contenido es obligatorio"),

body("image").
    notEmpty().withMessage("La Imagen es obligatorio").
    isURL().withMessage("La URL de la imagen no es valida")
]
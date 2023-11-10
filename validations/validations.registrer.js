import {body} from "express-validator"
export {validarRegister}

const validarRegister = [
body("name").
    notEmpty().withMessage("El Nombre es Obligatorio").
    isString().withMessage("El Nombre debe ser un string").
    isLength({min: 5 }).withMessage("El Nombre debe ser minimo 5 caracteres"),

body("email").
    notEmpty().withMessage("El E-mail es obligatorio").
    isEmail().withMessage("El E-mail no es valido"),

body("password").
    notEmpty().withMessage("La Clave es Obligatoria").
    isLength({min: 8}).withMessage("La Clave debe ser minimo 8 caracteres")
]
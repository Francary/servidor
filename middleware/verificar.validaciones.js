import { validationResult } from "express-validator" 
export {verificarValidaciones}


const verificarValidaciones = (req ,res , next) =>{
    const errores = validationResult(req);
    if( !errores.isEmpty()){
        return res.status(400).json(errores.array())
    } 
    next();  
}

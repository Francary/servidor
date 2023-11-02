export {errorController}

const errorController = (err, req , res, next )=>{

    // res.status(500).send("Hubo un error totalmente loco")
       
    res.status(500).json({superError: err})
     
}
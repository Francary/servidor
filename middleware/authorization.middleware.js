export {authorizationMiddleware}

const authorizationMiddleware = (req , res , next) =>{

    console.log("entramos en Authorization Middleware");
    if (!req.user.isAdmin) return res.status(401).send(`El Usuario ${req.user.name} no es Administrador`);

    next();
}
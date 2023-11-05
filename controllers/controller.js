export {
    ctrlGetAllPost,
    createPost,
    editPostParcial,
    ctrlUpdatePostId,
    ctrldeletePost,
    ctrlGetById
}
import{ 
    createNewPost,
    posts,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById
} from "../models/post.model.js"


// Controlador para TRAER todos los Posts
const ctrlGetAllPost = ( req, res, next) => {
    const posts2 = getAllPost()
    try {
        console.log( "uruario" , req.user)
            if(posts.length < 1){
            return res.sendStatus(204)
        }
            res.status(200).json(posts2)
    } catch (error) {
        next("Tenemos Problemas")
    }
}
// Controlador para CONSULTAR un solo Posts 
const ctrlGetById = ( req, res) => {
    const { postId } = req.params;
    const post = getPostById({ id: postId });
    if(!post){
        return res.sendStatus(404);
    }
    res.status(200).json(post);
}
// Controlador para CREAR un nuevo Posts
const createPost = (req,res) => {
    const { title , contenido, image} = req.body
    createNewPost({title,contenido,image})
    // Opcion 1 con mensaje por defecto de creacion
    // res.sendStatus(201)

    // Opcion 2 con mensaje se creacion personalizado
    // res.status(201).send("Posts Creado Correctamente")

    // Opcion 3 Devuelve el listado de Post nuevamente
    res.status(201).send(getAllPost())
}
// Controlodor para EDITAR AUN NO DEFINIDO
const editPostParcial = (req,res)=>{
   res.status(200).send("Metodo del PATCH")
}
// Controlador para EDITAR un Posts
const ctrlUpdatePostId = (req,res)=>{
    const { postId } = req.params
    const { title, contenido, image} = req.body
    const updatePost = updatePostById( postId , {title, contenido, image} );
    if(!updatePost){
        return res.sendStatus(404)
    }
    res.sendStatus(200);
}
// Controlador para ELIMINAR un Posts
const ctrldeletePost = (req,res)=>{
    const {postId} = req.params;
    deletePostById({id : postId})
    res.sendStatus(200)

}
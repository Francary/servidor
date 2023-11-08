export {
    createPost,
    ctrlGetAllPost,
    // editPostParcial,
    ctrlUpdatePostId,
    ctrldeletePost,
    ctrlGetById
}
import{postModel} from "../models/post.model.js"

// Controlador para TRAER todos los Posts
const ctrlGetAllPost =  async ( req, res) => {
    try {
        const posts = await postModel.findAll()
            if(posts.length < 1){
            return res.sendStatus(204)
        }
            res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
// Controlador para CONSULTAR un solo Posts 
const ctrlGetById = async ( req, res) => {
    try {
        const { postId } = req.params;
        const post = await postModel.findByPk(postId);
        if(!post){
            return res.sendStatus(404);
        }
        res.status(200).json(post);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
// Controlador para CREAR un nuevo Posts
const createPost =  async (req,res) => {
    try {
        const { title , contenido, image} = req.body
        const newPost = await postModel.create({title,contenido,image})
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

// Controlador para EDITAR un Posts
const ctrlUpdatePostId = async (req,res)=>{
    try {
        const { postId } = req.params
        const { title, contenido, image} = req.body
        const updatePost = await postModel.findByPk(postId);
        await updatePost.update ({ title, contenido, image})
        res.status(200).json(updatePost);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }

}
// Controlador para ELIMINAR un Posts
const ctrldeletePost = async (req,res)=>{
    try {
        const { postId } = req.params
        const post = await postModel.findByPk( postId);
        await post.destroy()
        res.status(200).send("Post Eliminado Correctamente")
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
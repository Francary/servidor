import { Router } from "express";
import { ctrlGetAllPost, createPost, editPostParcial,ctrlUpdatePostId, ctrldeletePost, ctrlGetById, } from "../controllers/controller.js"
import { errorController } from "../middleware/error.js"
import { validarCreatPosts } from "../validations/validations.posts.js";
import { verificarValidaciones } from "../middleware/verificar.validaciones.js";
import { validarPostsById } from "../validations/validations.postsById.js";
import { validarEditPosts } from "../validations/validations.editPosts.js";


const postRouter = Router()

postRouter.get('/',ctrlGetAllPost, errorController)

postRouter.get('/:postId',validarPostsById,verificarValidaciones, ctrlGetById)

postRouter.post('/', validarCreatPosts, verificarValidaciones, createPost)

postRouter.patch('/',editPostParcial)

postRouter.patch('/:postId',validarEditPosts,verificarValidaciones,ctrlUpdatePostId)

postRouter.delete('/:postId',validarPostsById,verificarValidaciones,ctrldeletePost)

export{postRouter}

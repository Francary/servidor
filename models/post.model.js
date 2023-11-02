export {
    posts,
    createNewPost,
    getAllPost,
    getPostById,
    updatePostById,
    deletePostById
}
// FUNCIONA COMO MI BASE DE DATOS LOCAL
let posts = [
    {
        id: 1,
        title: "Argentina Programa 1.0",
        contenido:"Cusro html",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.m.wikipedia.org%2Fwiki%2FArchivo%3AHTML5_logo_and_wordmark.svg&psig=AOvVaw2YB6V9vdHj5waIWfYQoizv&ust=1698694961262000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjRg4CCnIIDFQAAAAAdAAAAABAE"
        },
    {
        id:2,
        title: "Argentina Programa 2.0",
        contenido:"Cusro CCS",
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Fcss_919826&psig=AOvVaw04lewjJoNEgm6HbtA01Cy-&ust=1698695028337000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLj31Z-CnIIDFQAAAAAdAAAAABAE",
        }
]
// MODELO para TRAER todos los Posts
const getAllPost = () => {
    return [...posts]
};
// MODELO para CONSULTAR un Posts
const getPostById = ({ id }) => {
    const post = posts.find((post) => post.id == id)
    return post;
}
// MODELO para CREAR un Posts
const createNewPost =  ({ title, contenido, image }) => {  
    const newPost = { id: Date.now() ,title, contenido, image}
    posts.push(newPost)
};
// MODELO para EDITAR un Posts
const updatePostById = (id, data) => {
    const post = getPostById({id});
    if(!post) return null;

    posts = posts.map((post) => {
        if (post.id === id){
            if (data.title) post.title = data.title;
            if (data.contenido) post.contenido = data.contenido;
            if (data.image) post.image = data.image;
            return post;
        }
        return post;
    });
    return {
        ...post,
        ...data,
    };
};

// MODELO para ELIMINAR un Posts
const deletePostById = ({id}) => {
    posts = posts.filter((post) => post.id !== id)
}
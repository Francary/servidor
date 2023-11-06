import path from "node:path"
import * as url from "url"
import fs from "node:fs/promises"
export {ctrlUpload}
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))


const ctrlUpload = async (req , res) =>{
    console.log(req.files);
    const { image } = req.files;
    fs.mkdir(path.join(__dirname,"../uploads"), {recursive:true});
    await image.mv(path.join( __dirname,"../uploads", image.name ));
    fs.rm(path.join(__dirname, "../temp"), {recursive:true});
    res.send(`Imagen : ${image.name} Cargada correctamente`);
}
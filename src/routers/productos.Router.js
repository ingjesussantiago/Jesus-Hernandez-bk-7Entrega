import { Router } from "express"
import managerProducto from "../dao/mongoosedb/managerMongose/managerProductoMoogose.js"

import { uploader } from "../utils.js"
import { __dirname } from "../utils.js"

const router = Router()

const ManagerProducto = new managerProducto()

router.get("/", async (req, res) => {
    try {
        const productos = await ManagerProducto.getProduct()
        //res.render("home", { productos })
       res.json({ productos })
    } catch (error) {
        console.log(error);
    }

})

router.get("/:idProducto", async (req, res) => {
    try {
        const { idProducto } = req.params
        const producto = await ManagerProducto.getProductoById(idProducto)
        res.json({ producto })
    } catch (error) {
        console.log(error);
    }

})

router.post("/", async (req, res) => {
    //  uploader.single("file")
    //const producto = req.body
    try {
        const nuevoProducto = await ManagerProducto.addProduct(req.body)
        res.json({ message: "Producto creado", producto: nuevoProducto })
        // res.redirect("/realTimeProductos")
    } catch (error) {
        console.log(error);
    }

})


router.delete("/", async (req, res) => {
    const message = await ManagerProducto.delateProduct()
    res.json({ message })
})

router.delete("/:idProducto", async (req, res) => {
    try {
        const { idProducto } = req.params
        const message = await ManagerProducto.delateProductById(idProducto)
        res.json({ message })
    } catch (error) {
        console.log(error);
    }

})

router.put("/:idProducto", async (req, res) => {
    try {
        const { idProducto } = req.params
    const productoup = req.body
    // const updateOptions={new:true}
    const producto = await ManagerProducto.upDateProduc(idProducto, productoup)
    res.json({ producto })
    } catch (error) {
        console.log(error);
    }
    
})


//pos para imagen
// router.post("/", uploader.single('file'), async (req, res) => {
//     //  uploader.single("file")
//     if (!req.file) {
//         return res.status(400).send({ status: "error", mensaje: "no se adjunto archivo" })
//     }
//     console.log(req.file)

//     const producto = req.body
//     const productopaht = req.file.filename

//     producto.thumbnails =  `/img/${productopaht}`


//     const nuevoProducto = await ManagerProducto.addProduct(producto)
//     // res.json({ message: "Producto creado", producto: nuevoProducto })
//     res.redirect("/realTimeProductos")
// })


export default router
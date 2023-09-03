import { Router} from "express"
//import { managerProducto } from "../dao/manager/managerProducto.js"
import  managerProducto from "../dao/mongoosedb/models/managerProductoMoogose.js"
import { uploader } from "../utils.js"
import { __dirname } from "../utils.js"
import fs from 'fs/promises';


const router = Router()

//const ManagerProducto = new managerProducto(__dirname + "/dao/db/productos.json")
const ManagerProducto = new managerProducto()

router.get("/home", async (req, res) => {
    const productos = await ManagerProducto.getProduct()
    // res.render("home",{ productos })
    res.json({ productos })
})

router.get("/realTimeProductos", (req, res) => {
    res.render("realTimeProducts")
})

router.get("/formulario",(req,res)=>{
    res.render("formularioProducto")
})

router.get("/formularioIo",(req,res)=>{
    res.render("formularioProductoIo")
})


export default router
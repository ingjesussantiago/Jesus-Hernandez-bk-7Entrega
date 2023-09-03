import { productoModel } from "../models/producto.model.js"


export default class managerProducto {

    getProduct = async () => {
        try {
            const productos = await productoModel.find().lean()
           return productos
        } catch (error) {
            console.log(error);
        }
    }

    getProductoById = async (idProducto) => {
        try {
            const productoById = await productoModel.findById(idProducto)
            // const productos = JSON.parse(buscarproducts)
            return productoById
        } catch (error) {
            console.log(error);
        }
    }

    addProduct = async (producto) => {
        try {
            const nuevoProducto = await productoModel.create(producto)
            return nuevoProducto

        } catch (error) {
            console.log(error);
        }
    }

    delateProduct = async () => {
        try {
            const eliminaAllObjetos = await productoModel.deleteMany({})
            return eliminaAllObjetos

        } catch (error) {
            console.log(error);
        }
    }


    delateProductById = async (idProducto) => {
        try {
            const idProductoBorrado = await productoModel.findByIdAndDelete(idProducto)
            return idProductoBorrado
        } catch (error) {
            console.log(error)
        }

    }

    upDateProduc = async (idProducto,productoup) => {
        try {
            const updateOptions={new:true}
            const modificaProdcto = await productoModel.findByIdAndUpdate(idProducto,productoup,updateOptions)
            return modificaProdcto
        } catch (error) {
            console.log(error);
        }
    }






}



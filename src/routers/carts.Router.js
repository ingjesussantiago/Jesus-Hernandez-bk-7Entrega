import { Router } from "express"
import { __dirname } from "../../utils.js"
import ManagerCart from "../dao/mongoosedb/managerMongose/managerCartMongoose.js"
import managerProducto from "../dao/mongoosedb/managerMongose/managerProductoMoogose.js"

const router = Router()

const managerCart = new ManagerCart()
const ManagerProduct=new managerProducto()
 
router.get("/", async (req, res) => {
    try {
        const carts = await managerCart.getCarts()
        res.render("carritos", {carts})
        // res.json({ carts })
    } catch (error) {
        console.log(error);
    }
})



router.get("/:idCart", async (req, res) => {
    try {
        const { idCart } = req.params
        const cart = await managerCart.getCart(idCart)
        res.json({ cart })

    } catch (error) {
        console.log(error);
    }

})

router.post("/", async (req, res) => {
    try {
        const newCart = await managerCart.crearCarrito()
        res.json({ cart: newCart })

    } catch (error) {
        console.log(error);
    }


})

router.get("/delete/:idCart", async (req, res) => {
    try {
        const { idCart } = req.params
        const delatecart = await managerCart.delatecarrito(idCart)
        res.json({ delatecart })
    } catch (error) {

    }
})



router.post("/:cartId/products/:pid", async (req, res) => {
    const { cartId, pid } = req.params;
    const { quantity } = req.body;
  
    try {
      const checkIdProduct = await ManagerProduct.getProductoById(pid)
      if (!checkIdProduct) {
        return res.status(40).send({ message: `Product with ID: ${pid} not found` });
      }
  
      const checkIdCart = await managerCart.getCart(cartId)
      if (!checkIdCart) {
        return res.status(44).send({ message: `Cart with ID: ${cartId} not found` });
      }
  
      const result = await managerCart.addProductoCart(cartId, { _id: pid, quantity:quantity });
      console.log(result);
      return res.status(200).send({
        message: `Product with ID: ${pid} added to cart with ID: ${cartId}`,
        cart: result,
      });
    } catch (error) {
      console.error("Error occurred:", error);
      return res.status(500).send({ message: "An error occurred while processing the request" });
    }
  });











export default router

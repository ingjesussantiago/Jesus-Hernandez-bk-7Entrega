import express  from "express";
import {__dirname} from "./utils.js";
import handlebars from "express-handlebars"
const PORT=8080

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + "/public"))



app.engine("handlebars", handlebars.engine())
app.set("views", __dirname + "/views")
app.set("view engine", "handlebars")


app.get("/",(req,res)=>{
    res.send(`desde es puerto ${PORT}`)
})


app.listen(PORT, (req,res)=>{
    console.log(`servidor escuchando ${PORT}`);
})
import express  from "express";
const PORT=8080

const app = express();

app.get("/",(req,res)=>{
    res.send(`desde es puerto ${PORT}`)
})


app.listen(PORT, (req,res)=>{
    console.log(`servidor escuchando ${PORT}`);
})
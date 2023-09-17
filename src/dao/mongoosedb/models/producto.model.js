import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    title:{
        type:String
    },
    descripcion:{
        type:String
    },
    code:{
        type:Number
    },
    price:{
        type:Number
    },
    status:{
        type:Boolean
    },
    category:{
        type:String
    },
    stock:{
        type:String
    },
    thumbnails:{
        type:String
    }

});

export const productoModel =mongoose.model("productos",productoSchema)
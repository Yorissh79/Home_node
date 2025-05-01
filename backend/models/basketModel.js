import mongoose from "mongoose";

const basketSchema = mongoose.Schema({
    name   : {type:String, required:true},
    price  : {type:String, required:true},
    author : {type:String, required:true},
    image  : {type:String, required:true},
    count  : {type:String, required:true}
}, {timestamps:true})

const basketModel = mongoose.model("Basket", basketSchema)

export default basketModel
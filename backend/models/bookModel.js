import mongoose from "mongoose";

const BookSchema = mongoose.Schema({
    name   : {type:String, required:true},
    price  : {type:String, required:true},
    author : {type:String, required:true},
    image  : {type:String, required:true}
}, {timestamps:true})

const bookModel = mongoose.model("Book", BookSchema)

export default bookModel
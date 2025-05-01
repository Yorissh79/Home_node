import express from "express"
import { deleteBook, getBook, postBook } from "../controller/bookController.js"
import { deleteBasket, getBasket, postBasket } from "../controller/basketController.js"
import { deleteWish, getWish, postWish } from "../controller/wishController.js"

const router = express.Router()

router
.get("/book", getBook)
.get("/basket", getBasket)
.get("/wish", getWish)
.post("/book", postBook)
.post("/basket", postBasket)
.post("/wish", postWish)
.delete("/book/:id", deleteBook)
.delete("/basket/:id", deleteBasket)
.delete("/wish/:id", deleteWish)

export default router
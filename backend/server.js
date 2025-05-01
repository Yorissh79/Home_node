import express from "express"
import cors from "cors"
import router from "./router/router.js"
import { connectDb } from "./config/config.js"


const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors("*"))

app.use("/", router)
connectDb()

app.listen(3169, () => {
    console.log("Qalxdi")
})
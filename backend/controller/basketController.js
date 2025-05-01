import basketModel from "../models/basketModel.js"

const getBasket = async (req, res) => {
    const basket = await basketModel.find()
    res.json(basket)
}

const postBasket = async (req, res) => {
    const {name, price, author, image, count} = req.body
    const book = {name, price, author, image, count}
    await basketModel.create(book)
    res.json(book)
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await basketModel.findByIdAndDelete(id)
    res.json(id)
}
export { getBasket, deleteBasket, postBasket }
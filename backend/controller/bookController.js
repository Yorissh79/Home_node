import bookModel from "../models/bookModel.js"

const getBook = async (req, res) => {
    const book = await bookModel.find()
    res.json(book)
}

const postBook = async (req, res) => {
    const {name, price, author, image} = req.body
    const book = {name, price, author, image}
    await bookModel.create(book)
    res.json(book)
}

const deleteBook = async (req, res) => {
    const {id} = req.params
    await bookModel.findByIdAndDelete(id)
    res.json(id)
}

export { getBook, postBook, deleteBook}
import wishModel from "../models/wishModel.js";

const getWish = async (req, res) => {
  const basket = await wishModel.find();
  res.json(basket);
};

const postWish = async (req, res) => {
    const {name, price, author, image} = req.body
    const book = {name, price, author, image}
    await wishModel.create(book)
    res.json(book)
}

const deleteWish = async (req, res) => {
  const { id } = req.params;
  await wishModel.findByIdAndDelete(id);
  res.json(id);
};
export { getWish, deleteWish, postWish };

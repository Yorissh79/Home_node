import React from "react";
import style from "./Card.module.scss";
import { useDispatch } from "react-redux";
import { deleteBasketThunk, postBasketThunk } from "../../redux/reducers/basketSlice";
import { deleteWishThunk, postWishThunk } from "../../redux/reducers/wishSlice";

const Card = ({ item, who }) => {
  const dispatch = useDispatch();

  const addToBasket = (object) => {
    const data = {
      name: object.name,
      price: object.price,
      author: object.author,
      image: object.image,
      count: "0",
    };

    dispatch(postBasketThunk(data));
  };

  const addToWishlist = (object) => {
    const data = {
      name: object.name,
      price: object.price,
      author: object.author,
      image: object.image
    };
    dispatch(postWishThunk(data));
  };

  const deleteItem = (kim, id) => {

    if (kim === "basket") {
        dispatch(deleteBasketThunk(id))
    }

    if (kim === "wish") {
        dispatch(deleteWishThunk(id))
    }
  }

  return (
    <div className={style.main}>
        <div className={style.imgbox}>
            <img src={item.image} alt="" />
        </div>
        <p>{item.name}</p>
        <p>{item.price}</p>
        <p>{item.author}</p>
        {who == "basket" ? <p>{item.count}</p> : ""}

        {who == "home" ? <div className={style.btns}>
            <button onClick={() => addToBasket(item)}>Add to basket</button>
            <button onClick={() => addToWishlist(item)}>Add to wish</button>
        </div>: ""}

        {who === "basket" || who === "wish" ? <button onClick={() => deleteItem(who, item._id)}>Delete</button> : ""}
    </div>
  );
};

export default Card;

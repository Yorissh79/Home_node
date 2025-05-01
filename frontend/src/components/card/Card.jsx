import React from "react";
import style from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasketThunk, getBasketThunk, postBasketThunk } from "../../redux/reducers/basketSlice";
import { deleteWishThunk, getWishThunk, postWishThunk } from "../../redux/reducers/wishSlice";

const Card = ({ item, who }) => {
  const dispatch = useDispatch();

  const value_wish = useSelector(state => state.wish.data)
  const value_basket = useSelector(state => state.basket.data)

  const addToBasket = (object) => {
    dispatch(getBasketThunk())
    if (value_basket){
      const exist = value_basket.find((item) => item.name === object.name)

      if (!exist) {
        const data = {
          name: object.name,
          price: object.price,
          author: object.author,
          image: object.image,
          count: "1"
        };
        dispatch(postBasketThunk(data));
      } 
      
      else {
        const data = {
          name: object.name,
          price: object.price,
          author: object.author,
          image: object.image,
          count: String(Number(exist.count) + 1)
        };
        dispatch(deleteBasketThunk(exist._id))
        dispatch(postBasketThunk(data));
      }
    }
  };

  const addToWishlist = (object) => {
    dispatch(getWishThunk())

    if (value_wish){
      const exist = value_wish.find((item) => item.name === object.name)

      if (!exist) {
        const data = {
          name: object.name,
          price: object.price,
          author: object.author,
          image: object.image
        };
        dispatch(postWishThunk(data));
      }
    }
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

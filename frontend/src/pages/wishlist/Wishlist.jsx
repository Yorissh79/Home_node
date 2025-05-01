import React, { useEffect } from 'react'
import style from './Wishlist.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/card/Card'
import { getWishThunk } from '../../redux/reducers/wishSlice'

const Wishlist = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.wish.data)
    const loadig = useSelector(state => state.wish.loadig)
    const error = useSelector(state => state.wish.error)

    // setInterval(() => {
    //     dispatch(getWishThunk())
    // }, 2000);

    useEffect(() => {
        dispatch(getWishThunk())
    }, [    ])

    if (loadig) <p>Loading...</p>
    if (error) <p>Error</p>

    return (
       <div className={style.main}>
           
            {data?.map((item) => <Card item={item} who={"wish"}/>)} 

       </div>
    )
}

export default Wishlist
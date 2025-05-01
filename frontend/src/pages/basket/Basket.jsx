import React, { useEffect } from 'react'
import style from './Basket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../redux/reducers/basketSlice'
import Card from '../../components/card/Card'

const Basket = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.basket.data)
    const loadig = useSelector(state => state.basket.loadig)
    const error = useSelector(state => state.basket.error)

    // setInterval(() => {
    //     dispatch(getBasketThunk())
    // }, 2000);

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [    ])

    if (loadig) <p>Loading...</p>
    if (error) <p>Error</p>

    return (
       <div className={style.main}>
           
            {data?.map((item) => <Card item={item} who={"basket"}/>)} 

       </div>
    )
}

export default Basket
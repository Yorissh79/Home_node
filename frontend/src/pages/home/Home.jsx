import React, { useEffect } from 'react'
import style from './Home.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../../components/card/Card'
import { getCardThunk } from '../../redux/reducers/cardSilce'

const Home = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.card.data)
    const loadig = useSelector(state => state.card.loadig)
    const error = useSelector(state => state.card.error)

    useEffect(() => {
        dispatch(getCardThunk())
    }, [    ])

    if (loadig) <p>Loading...</p>
    if (error) <p>Error</p>

    return (
       <div className={style.main}>

            {data?.map((item) => <Card item={item} who={"home"}/>)} 

       </div>
    )
}

export default Home
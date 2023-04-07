import React, { useContext, useEffect, useState } from 'react'
import { FavContext } from '../Context/FavContext'
import Card from './Card'
import Loading from './Loading'
import ThemeContext from '../Context/ThemeContext'
import styles from '../Routes/Home.module.css'

const FavDentists = () => {

    const context = useContext(ThemeContext);
    const isDark = context.isDarkMode;

    const { state } = useContext(FavContext)

    const [cardData, setCardData] = useState()

    useEffect(() => {
        setCardData(state.favs)
    }, [state])

    return (
        <div className={`${styles.todo} ${isDark && styles.dark}`}>
            <div className='card-grid container'>
                {cardData !== undefined ? (cardData.length > 0 ? cardData.map((item) => (
                    <Card key={item.id} data={item} />
                )) : 'No hay favoritos, agregue alguno!') : <Loading />}
            </div>
        </div>
    )
}

export default FavDentists
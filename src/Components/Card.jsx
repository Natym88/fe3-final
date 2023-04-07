import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FavContext } from "../Context/FavContext";
import ThemeContext from "../Context/ThemeContext"
import styles from "./Card.module.css";

const Card = ({data}) => {

  const {state, dispatch} = useContext(FavContext)
  const [isFavorito, setIsFavorito] = useState(false)
  const context = useContext(ThemeContext);
  const isDark = context.isDarkMode;

  const handleAdd = () => {
    setIsFavorito(true)
    dispatch({ type: 'ADD', payload: data})
  }

  const handleRemove = () => {
    setIsFavorito(false)
    dispatch({ type: 'REMOVE', payload: data.id })
  }

  useEffect( () => {
    if(state.favs.length > 0 ){
      if(state.favs.find( fd => fd.id === data.id) !== undefined)
        {setIsFavorito(true);}
    }
  }, [ isFavorito ])

  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card ${isDark ? styles.cardDark : ''}`}>
        <div className={styles.fav} >{!isFavorito ? <p onClick={handleAdd}> 🤍 </p> : <p onClick={handleRemove}>❤️</p>}</div>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt={`foto of ${data.name}`}
        />
        <div className={`card-body ${styles.CardBody}`}>
            <Link to={`/dentista/${data.id}`}>
              <h5 className={`card-title ${styles.title}`}>{data.name}</h5>
            </Link>
        </div>
      </div>
    </>
  );
};

export default Card;

import { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import Loading from "../Components/Loading"
import {DentistContext} from "../Context/DentistContext";
import ThemeContext from "../Context/ThemeContext";
import styles from "./Home.module.css"

const Home = () => {

  const data = useContext(DentistContext)
  const [cardData, setCardData] = useState()

  const context = useContext(ThemeContext);
  const isDark = context.isDarkMode;

  useEffect( () => {
    setCardData(data.data)
  }, [data])
  
  return (
    <div className={`${styles.todo} ${isDark ? styles.dark : ''}`}>
      <h1>Home</h1>
      <div className="card-grid container" >
        {cardData !== undefined ? (cardData.length > 0 && cardData.map( (item) => (
          <Card key={item.id} data={item} />
        ))) : <Loading/> }
      </div>
    </div>
)
};

export default Home;

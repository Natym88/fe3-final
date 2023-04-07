import { useContext } from "react";
import DetailCard from "../Components/DetailCard";
import "../index.css"
import ThemeContext from "../Context/ThemeContext";

const Detail = () => {

  const context = useContext(ThemeContext);
  const isDark = context.isDarkMode;

  return (
    <div className={isDark && 'dark'}>
      <DetailCard />
    </div>
  )
}

export default Detail
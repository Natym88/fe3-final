import Contacto from "../Components/Contacto";
import ThemeContext from "../Context/ThemeContext";
import styles from "./Home.module.css"
import { useContext } from "react";

const Contact = () => {

  const context = useContext(ThemeContext);
  const isDark = context.isDarkMode;

  return (
    <div className={`${styles.todo} ${isDark && styles.dark}`}>
      <h1>Dejanos tu consulta o comentario</h1>
      <Contacto />
    </div>
  );
};

export default Contact;

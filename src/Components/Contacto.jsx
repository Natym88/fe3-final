import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import styles from "./Form.module.css";
import ThemeContext from "../Context/ThemeContext"

const Contanto = () => {

  const context = useContext(ThemeContext)
  const isDark = context.isDarkMode


  const [ isNameValid , setIsNameValid ] = useState(true)
  const [ isPhoneValid , setIsPhoneValid ] = useState(true)
  const [ isComentValid , setIsComentValid ] = useState(true)
  const [ isEmailValid , setIsEmailValid ] = useState(true)
  const [ isFormValid , setIsFormValid ] = useState(false)

  const emailRegex = /^\S+@\S+\.\S+$/;

  const navigate = useNavigate();

  const validarForm = () => {
    if( isNameValid && isPhoneValid && isComentValid && isEmailValid)
      setIsFormValid(true)
    else
      setIsFormValid(false)
  }

  const nameValidationHandler = (e) => {
    if(e.target.value.length > 2)
      setIsNameValid(true)
    else
      setIsNameValid(false)
  }

  const phoneValidationHandler = (e) => {
    if(e.target.value.length > 7)
      setIsPhoneValid(true)
    else
      setIsPhoneValid(false)
  }
 
  const emailValidationHandler = (e) => {
    setIsEmailValid(emailRegex.test(e.target.value))
  }

  const comentValidationHandler = (e) => {
    if(e.target.value.length > 20)
      setIsComentValid(true)
    else
      setIsComentValid(false)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    validarForm()
    if(isFormValid){
      navigate('/')
      swal('Gracias por comunicarse con nosotros! Su consulta o comentarios será respondido a la brevedad')
    }
  };

  return (
    <>
      <div
        className={`text-center card container ${styles.card} ${isDark && styles.cardDark}`}
      >
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing} ${!isNameValid && styles.error}`}
              placeholder="Nombre"
              name="name"
              required onChange={nameValidationHandler}
            />
            {!isNameValid && <p className={styles.errorMessage}>El nombre debe tener al menos 3 letras</p>}
            <input
              className={`form-control ${styles.inputSpacing} ${!isPhoneValid && styles.error}`}
              placeholder="Teléfono"
              name="phone"
              type="number"
              required onChange={phoneValidationHandler}
            />
            {!isPhoneValid && <p className={styles.errorMessage}>Debe tener al menos 8 números</p>}
            <input
              className={`form-control ${styles.inputSpacing} ${!isPhoneValid && styles.error}`}
              placeholder="Email"
              name="email"
              type="email"
              required onChange={emailValidationHandler}
            />
            {!isEmailValid && <p className={styles.errorMessage}>Revise los datos</p>}
            <textarea
              className={`form-control ${styles.inputSpacing} ${!isComentValid && styles.error}`}
              name="coment" id="" cols="30" rows="10" required onChange={comentValidationHandler}/>
            {!isComentValid && <p className={styles.errorMessage}>Debe contener al menos 20 caracteres</p>}
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contanto;

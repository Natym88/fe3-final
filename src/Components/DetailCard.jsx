import { useContext, useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from 'react-router-dom'
import Loading from "./Loading";
import ThemeContext from "../Context/ThemeContext";

const DetailCard = () => {

  const [doctor, setDoctor] = useState(undefined)
  const params = useParams()
  
  const getDoctor = async()=>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      const data = await res.json()
      setDoctor(data)
      console.log(doctor);
 }

  useEffect(() => {
    getDoctor();
  }, [params]);

  const context = useContext(ThemeContext);
  const isDark = context.isDarkMode;

  return (
    <>
      {doctor ? (
      <>
        <h1>Detail about Dentist {doctor.name} </h1>
        <section className="card col-sm-12 col-lg-6 container">
          {/* //Na linha seguinte deverá ser feito um teste se a aplicação
          // está em dark mode e deverá utilizar o css correto */}
          <div
            className={`card-body row ${isDark ? styles.cardDark : ''}`}
          >
            <div className="col-sm-12 col-lg-6">
              <img
                className="card-img-top"
                src="/images/doctor.jpg"
                alt={doctor.name}
              />
            </div>
            <div className="col-sm-12 col-lg-6">
              <ul className="list-group">
                <li className="list-group-item">Nombre: {doctor.name}</li>
                <li className="list-group-item">
                  Sobrenombre: {'Sobrenome do Dentista'}
                </li>
                <li className="list-group-item">
                  Usuário: {doctor.username}
                </li>
              </ul>
              <div className="text-center">
                {/* //Na linha seguinte deverá ser feito um teste se a aplicação
                // está em dark mode e deverá utilizado o css correto */}
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  className={`btn btn-light ${styles.button
                    }`}
                >
                  Marcar consulta
                </button>
              </div>
            </div>
          </div>
        </section>
        <ScheduleFormModal />
      </>
        ): <Loading />}
    </>
  );
};

export default DetailCard;

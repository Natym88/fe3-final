import { useContext, useEffect, useState } from "react";
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
 }

  useEffect(() => {
    getDoctor();
  }, [params]);

  const context = useContext(ThemeContext);
  const isDark = context.isDarkMode;

  return (
    <>
      {doctor ? (
      <div className={styles.todo}>
        <h1>Detalles del dentista {doctor.name} </h1>
        <section className="card col-sm-12 col-lg-6 container">
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
                  Email: {doctor.email}
                </li>
                <li className="list-group-item">
                  Teléfono: {doctor.phone}
                </li>
                <li className="list-group-item">
                  Website: {doctor.website}
                </li>
              </ul>
              <div className="text-center">
              </div>
            </div>
          </div>
        </section>
      </div>
        ): <Loading />}
    </>
  );
};

export default DetailCard;

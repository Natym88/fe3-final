import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Loading from "../Components/Loading"

const Home = () => {

  const [data, setData] = useState([])

  const fetchData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const cosas = await res.json();
    setData(cosas);
  }

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {data.length > 0 ? data.map( item => (
          <Card key={item.id} data={item} />
        )
        ) : <Loading/>}
      </div>
    </>
  );
};

export default Home;

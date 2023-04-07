import { createContext } from "react";
import { useState, useEffect } from "react";

const DentistContext = createContext();

const DentistDataContext = ({children}) => {

    const [data, setData] = useState([])

    const fetchData = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const cosas = await res.json();
      setData(cosas);
    }
    useEffect(() => {
        fetchData();
      }, []);

    return (
        <>
            <DentistContext.Provider value={{data}}>
            {children}
            </DentistContext.Provider>
        </>
    )
}

export {DentistContext, DentistDataContext};
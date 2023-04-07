import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeContext from "./Context/ThemeContext";
import { DentistDataContext } from "./Context/DentistContext";
import { useState, useEffect } from "react";
import { FavDataContext } from "./Context/FavContext";

export const darkMode = false;

function App() {

  const localValue = JSON.parse(localStorage.getItem("isDarkMode"));

  const [isDarkMode, setIsDarkMode] = useState(localValue ?? darkMode);

  // Funcion que cambia el tema
  const handleChangeTheme = () => {
    isDarkMode === true ? setIsDarkMode(false) : setIsDarkMode(true);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <>
      <ThemeContext.Provider value={{ isDarkMode, handleChangeTheme }}>
        <div className={`app light}`}>
          <Navbar />
          <FavDataContext>
            <DentistDataContext>
              <Outlet />
            </DentistDataContext>
          </FavDataContext>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;

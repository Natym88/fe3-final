import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ThemeContext from "./Context/ThemeContext";
import { useState, useEffect } from "react";

export const darkMode = false;

function App() {

  const localValue = JSON.parse(localStorage.getItem("theme"));

  const [isDarkMode, setIsDarkMode] = useState(localValue ?? darkMode);

  // Funcion que altera el estado del tema
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
            <main>
              <Outlet />
            </main>
            <Footer />
          </div>
        </ThemeContext.Provider>
      </>
    );
}

export default App;

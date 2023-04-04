import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail"
import Login from "./Routes/Login"
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />}/>
          <Route path="dentista/:id" element={<Detail />}/>
          <Route path="login" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

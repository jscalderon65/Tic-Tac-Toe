import React from "react";
import { Navbar } from "./index.js";
import { useHistory } from "react-router-dom";
const DontBelong = () => {
  const history = useHistory();
  const onGoHome = () => {
    history.push("/options");
  };
  return (
    <div className="OptionsView-container ">
      <Navbar />
      <div className="DontBelong-container animate__animated animate__tada">
        <div className="DontBelong-title">No perteneces a este juego</div>
        <button className="btn btn-danger" onClick={onGoHome}>
          <i className="fas fa-arrow-left"></i> Volver al inicio
        </button>
      </div>
    </div>
  );
};

export default DontBelong;

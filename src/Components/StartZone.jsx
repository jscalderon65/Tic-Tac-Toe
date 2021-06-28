import React from "react";
import { GoogleAuthIn } from "../Firebase/FirebaseAuth.js";
const StartZone = () => {
  return (
    <div className="StartZone-container">
      <div className="StartZone-start">
        <div className="StartZone-start-button animate__animated animate__fadeIn">
          <span className="StartZone-button-in" onClick={GoogleAuthIn}>Iniciar</span>
        </div>
      </div>
    </div>
  );
};

export default StartZone;

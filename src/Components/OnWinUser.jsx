import React from "react";
import { Navbar } from "./index.js";
const OnWinUser = ({ UserTurn, ButtonRe, ButtonLeave, state, UserInfo }) => {
  return (
    <>
      <Navbar />
      <div className="OnWinUser-container animate__animated animate__bounceIn">
        {state ? (
          <div className="OnWinUser-profile">
            <div className="OnWinUser-profile-title">
              <img src={UserInfo.photoUrl} alt={UserTurn} />
            </div>
            <div className="OnWinUser-profile-body">
              {UserTurn} ganó la partida
              <br />
              <i
                style={{ fontSize: "5rem", marginTop: "20px" }}
                className="fas fa-award"
              ></i>
              <br />
              <br />
              {ButtonRe}
              <br />
              <br />
              {ButtonLeave}
            </div>
          </div>
        ) : (
          <div className="OnWinUser-tie-container">
            Juego empatado
            <br/>
            <i style={{ fontSize: "5rem", marginTop: "20px" }} className="fas fa-handshake"></i>
            <br />
            <br />
            {ButtonRe}
            <br />
            <br />
            {ButtonLeave}
          </div>
        )}
      </div>
    </>
  );
};

export default OnWinUser;

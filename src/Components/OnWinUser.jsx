import React from "react";
import { Navbar } from "./index.js";
const OnWinUser = ({ UserTurn, Button, state, UserInfo }) => {
  return (
    <>
      <Navbar />
      <div className="OnWinUser-container animate__animated animate__bounceIn">
        {state ? (
        <div className="OnWinUser-profile">
            <div className="OnWinUser-profile-title">
                <img src={UserInfo.photoUrl} alt={UserTurn}/>
            </div>
            <div className="OnWinUser-profile-body">
            {UserTurn} ganó
            <br/>
            <br/>
            {Button}
            </div>
        </div>
        ) : (
          <h1>Se ha empatado</h1>
        )}
      </div>
    </>
  );
};

export default OnWinUser;

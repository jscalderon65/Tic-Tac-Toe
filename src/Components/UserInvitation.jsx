import React from "react";
const UserInvitation = ({ Users, onUserIngress }) => {
  return (
    <div className="UserInvitation-container animate__animated animate__bounceIn">
      <div className="UserInvitation-title">
        <img src={Users[0].photoUrl} alt={Users[0].name} />
        <b> {Users[0].name} </b> te esta invitando a una partida
      </div>
      <div className="UserInvitation-buttons">
        <button className="btn btn-primary" onClick={onUserIngress}>
          <i className="fab fa-google"></i> Ingresar con Google
        </button>
      </div>
    </div>
  );
};

export default UserInvitation;

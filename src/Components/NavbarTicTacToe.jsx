import React from "react";
const NavbarTicTacToe = ({ ButtonLeave, Users }) => {
  return (
    <div className="NavbarTicTacToe-container">
      <div className="NavbarTicTacToe-user1">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            style={{ borderRadius: "100%",objectFit:"cover" }}
            src={Users[0].photoUrl}
            alt={Users[0].name}
          />
        </div>
        <div style={{ flex: "1", display: "flex", justifyContent: "center",textAlign:"center" }}>
          {Users[0].name}
        </div>
      </div>
      <div className="NavbarTicTacToe-vs">VS</div>
      <div className="NavbarTicTacToe-user2">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img
            style={{ borderRadius: "100%",objectFit:"cover" }}
            src={Users[1].photoUrl}
            alt={Users[1].name}
          />
        </div>
        <div style={{ flex: "1", display: "flex", justifyContent: "center",textAlign:"center" }}>
          {Users[1].name}
        </div>
      </div>
      <br />
      <div className="NavbarTicTacToe-button">{ButtonLeave}</div>
    </div>
  );
};

export default NavbarTicTacToe;

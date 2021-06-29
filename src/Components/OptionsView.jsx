import React from "react";
import { StartZone, Navbar } from "./index.js";
import { useForm } from "my-customhook-collection";
import { createServer, addUser } from "../Firebase/FirebaseOperations";
import { FirebaseLogOut } from "../Firebase/FirebaseAuth";
import { useHistory } from "react-router-dom";
import { firebase } from "../Firebase/FirebaseConfig";
import { useFirebaseUser } from "my-customhook-collection";
const OptionsView = () => {
  const history = useHistory();
  const [{ serverValue }, onChangeInput] = useForm({
    serverValue: "",
  });
  const [UserData, isOn] = useFirebaseUser(firebase);
  const onCreateServer = () => {
    createServer().then((resp) => {
      UserData &&
        addUser(resp, [
          {
            name: UserData.displayName,
            email: UserData.email,
            photoUrl: UserData.photoURL,
            uid: UserData.uid,
          },
        ]).then(() => {
          history.push(`/game/${resp}`);
        });
    });
  };
  const onGoServer = () => {
    history.push(`/game/${serverValue}`);
  };
  return (
    <div className="OptionsView-container">
      <Navbar />
      {isOn ? (
        <div className="OptionsView-options animate__animated animate__backInUp ">
          <div className="OptionsView-box animate__animated animate__fadeIn">
            <div className="OptionsView-search">
              <input
                className="OptionsView-input form-control"
                name="serverValue"
                placeholder="Ingresa un PIN"
                type="text"
                autoComplete="off"
                onChange={onChangeInput}
                value={serverValue}
              />
              <button className="btn" onClick={onGoServer}>
                Ir
              </button>
            </div>
            <div className="OptionsView-create" onClick={onCreateServer}>
              <button className="btn">
                Crear partida
                <i className="fas fa-gamepad"></i>
              </button>
            </div>

            <div className="OptionsView-close" onClick={FirebaseLogOut}>
              <button className="btn">
                Salir
                <i className="fas fa-sign-out-alt"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <StartZone />
      )}
    </div>
  );
};

export default OptionsView;

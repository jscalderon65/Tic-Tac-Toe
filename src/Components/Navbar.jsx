import React, { useState } from "react";
import { Modal } from "antd";
import { GithubOutlined, InfoCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
const Navbar = () => {
  const history = useHistory();
  const onGoHome = () => history.push("/");
  const onOpenGitHub = () => {
    window.open("https://github.com/jscalderon65/Tic-Tac-Toe");
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
    <div className="OptionsView-navbar">
      <div className="OptionsView-navbar-brand" onClick={onGoHome}>
        Tic-tac-toe
      </div>
      <div className="OptionsView-navbar-icons">
        <GithubOutlined onClick={onOpenGitHub} />
        <InfoCircleOutlined onClick={showModal} style={{ marginLeft: "20px" }} />
      </div>
    </div>
    <Modal
        title={
          <div
            style={{ color: "black", fontSize: "1.2rem", fontWeight: "900" }}
          >
            Información
          </div>
        }
        footer={null}
        bodyStyle={{ padding: "0", backgroundColor: "#090C10" }}
        visible={isModalVisible}
        onOk={handleOk}
        closeIcon={
          <CloseCircleOutlined style={{ color: "black", fontSize: "25px" }} />
        }
        onCancel={handleCancel}
        centered
      >
        <div className="OptionsView-navbar-modal"> 
          <div>Comparte y juega partidas con quien quieras del conocido juego Tic-Tac-Toe, ingresa con tu cuenta de Google y serás capaz de:
          Crear y compartir partidas e ingresar a una partida ya creada mediante un PIN.</div>
          <br/>
          <div>
          Información extra:
          <ul>
            <li>Es necesario ingresar con tu cuenta de Google para jugar.</li>
            <li>Si una partida ya inicio, no te será permitido ingresar.</li>
            <li>Puedes reiniciar la partida, pero si una persona abandona la partida, la sala será cerrada.</li>
          </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Navbar;

import React, { useState } from "react";
import { Modal, message } from "antd";
import { WhatsAppOutlined, CloseCircleOutlined } from "@ant-design/icons";
const ShareGame = () => {
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
  const copyButton = (id_elemento) => {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).textContent);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    message.success("Texto copiado en el portapapeles");
    handleOk();
  };
  const shareWhatsapp = () => {
    window.open(`https://api.whatsapp.com/send?text=${window.location.href}`);
    message.success("Compartiendo por WhatsApp");
    handleOk();
  };
  return (
    <>
      <button onClick={showModal} className="btn btn-light">
        Compartir partida <i className="fas fa-share-square"></i>
      </button>
      <Modal
        title={
          <div
            style={{ color: "black", fontSize: "1.2rem", fontWeight: "900" }}
          >
            Compartir
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
        <div className="ShareGame-container">
          <p id="copy-text" style={{ display: "none" }}>
            {window.location.href}
          </p>
          <div className="ShareGame-whatsapp">
            <WhatsAppOutlined
              onClick={shareWhatsapp}
              style={{ color: "#27CD65", cursor: "pointer" }}
            />
          </div>
          <div className="ShareGame-link">
            <button
              onClick={() => copyButton("copy-text")}
              className="btn btn-primary"
            >
              Copiar url <i className="fab fa-creative-commons-share"></i>
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ShareGame;
